const user_login = require('../models/user_login')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// To access environement variables
require('dotenv').config()
// Create authorisation of email which will send emails to user
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'learnandearn419@gmail.com',
        pass: 'qlnsscovewpsjvsq'
    }
});

module.exports.signup = async (req, res) => {
    try {
        //   Existing user check
        const check = await user_login.findOne({ email: req.body.email })
        if (check) {
            return res.status(403).json({ message: "User Already Exists", success: 0 })
        }
        //    Sednding otp tp the user for validation
        let x = Math.floor(100000 + Math.random() * 900000)
        let mailDetails = {
            from: 'learnandearn419@gmail.com',
            to: req.body.email,
            subject: 'Authorization for Learn and Earn',
            text: `OTP for your signup process is: ${x}`
        };
        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                return res.status(400).json({ success: 1, message: "Email Don't Exist" })
            } else {
                return res.status(200).json({ otp: x, success: 2, message: "Otp Sent Successfully" })
            }
        });
    } catch (error) {
        return res.status(400).json({ success: 1, message: "Email Dont Exist" })
    }
}
module.exports.login = async (req, res) => {
    try {
        // Checking if email & password are specified
        if (!req.body.email || !req.body.password)
            return res.status(404).json({ success: -1, msg: "Bad request" })
        //   Existing user check
        const check = await user_login.findOne({ email: req.body.email })
        if (!check) {
            return res.staus(404).json({ success: 0, message: "NO Such User" })
        }
        // Cheking Password is correct or not
        const compare_pass = await bcrypt.compare(req.body.password, check.password);
        if (!compare_pass) {
            return res.json({ success: 1, message: "Incorrect PassWord" })
        }
        // Generating Token

        const acesstoken = jwt.sign({ email: req.body.email }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: '90s' });
        const refreshtoken = jwt.sign({ email: req.body.email }, process.env.REFRESH_TOKEN_PRIVATE_KEY)
        console.log(refreshtoken)
        const resp = await user_login.updateOne({ email: req.body.email }, { $set: { refreshToken: refreshtoken } })
        // Setting up refresh token cookie
        res.cookie("refresh_token", refreshtoken, {
            // secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })
        res.cookie("access_token", acesstoken, {
            // secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })
        // Returning token
        return res.status(200).json({ message: "User Logged in succcessfully" })
    } catch (error) {
        console.log(error)
        return res.json({ success: 3, message: "Some Error Occured" })

    }
}
module.exports.verify = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.name)
            return res.status(404).json({ message: "Enter All credentials properly" })
        const hash_pass = await bcrypt.hash(req.body.password, process.env.SALT)
        const access_token = await jwt.sign({ email: req.body.email }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: '90s' });
        const refresh_token = await jwt.sign({ email: req.body.email }, process.env.REFRESH_TOKEN_PRIVATE_KEY);
        let resp = await user_login.create({ email: req.body.email, name: req.body.name, password: hash_pass, refreshToken: refresh_token })
        res.cookie("refresh_token", refresh_token, {
            // secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })
        res.cookie("access_token", access_token, {
            // secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })
        return res.status(200).json({ success: 0, message: "User Created Succefully" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: 1, message: "SERVER ERROR OCCURED" })
    }

}
module.exports.resend = async (req, res) => {
    try {
        console.log(req.body)
        let x = Math.floor(100000 + Math.random() * 900000)
        let mailDetails = {
            from: 'learnandearn419@gmail.com',
            to: req.body.email,
            subject: 'Authorization for Learn and Earn',
            text: `OTP for your signup process is: ${x}`
        };
        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                res.status(400).json({ success: 1, message: "Email Dont Exist" })
            } else {
                res.status(200).json({ otp: x, success: 2, message: "Otp Sent Successfully" })
            }
        });
    } catch (error) {
        res.status(400).json({ success: 1, message: "Email Dont Exist" })
    }
}
module.exports.logout = async (req, res) => {
    const refresh_token = req.cookies.refresh_token
    const check = await user_login.findOne({ refreshToken: refresh_token })
    const resp = await user_login.updateOne({ refreshToken: refresh_token }, { $set: { refreshToken: null } })
    res.clearCookie('refresh_token')
    res.clearCookie('access_token')
    // console.log("Cookie Cleared")
    return res.status(200).json({ message: "User Logged out successfully" })
}


