const cookieParser = require('cookie-parser')
const user_login = require('../models/user_login')
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

async function func(req, res, next) {
    const check = await user_login.findOne({ refreshToken: req.cookies.refresh_token })
    console.log(check)
    if (!check)
        return res.status(404).json({ message: "No user has this refresh token" })
    else {
        jwt.verify(req.cookies.refresh_token, process.env.REFRESH_TOKEN_PRIVATE_KEY, async (err, user) => {
            if (err)
                return res.status(401).json({ message: "Refresh Token Expired", error: err })
            const newRefreshToken = jwt.sign({ email: user.email }, process.env.REFRESH_TOKEN_PRIVATE_KEY)
            console.log(newRefreshToken)
            const resp = await user_login.updateOne({ email: user.email }, { $set: { refreshToken: newRefreshToken } })
            console.log(resp)
            console.log(user.email)
            const newaccessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: "90s" })
            console.log(newaccessToken)
            res.cookie("refresh_token", newRefreshToken, {
                // secure: true,
                httpOnly: true,
                sameSite: 'lax'
            })
            res.cookie("access_token", newaccessToken, {
                // secure: true,
                httpOnly: true,
                sameSite: 'lax'
            })
            // return res.status(200).json({message:"Access token successfully regenerated" })
            next()
        })
    }
}

async function authenticationMiddleware(req, res, next) {
    if (req.cookies.refresh_token == null && req.cookies.access_token == null)
        return res.status(404).json({ message: "No Access and refresh token, login again" })
    if (req.cookies.access_token != null) {
        jwt.verify(req.cookies.access_token, process.env.ACCESS_TOKEN_PRIVATE_KEY, async (err, user) => {
            if (err) {
                if (req.cookies.refresh_token == null) {
                    return res.status(404).json({ message: "Acces token expired and refresh token is invalid" })
                }
                else {
                    func(req,res,next)
                }
            }
            else {
                next()
            }
        })
    }
    else {
        func(req,res,next)
    }
}
app.use(cookieParser())
app.use(express.json())

app.get('/hello', authenticationMiddleware,(req, res) => {
   res.send("Hello")
})

module.exports = app