const express = require('express')
const cookieParser = require('cookie-parser')
const router = express.Router()
const authController = require('../controller/authController')
const user_data = require('../models/user_data')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.use(cookieParser())

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/verify', authController.verify)
router.post('/resend', authController.resend)
router.post('/logout', authController.logout)
// router.post('/validate', authController.auth, authController.validate)

// let a = 10
// app.post('/t1', (req, res) => {
//   move(req, res)
//    res.json({
//     message: "bJI"
//   })
//   // console.log(b)
// })
// app.post('/t2', (req, res) => {
//   return res.json({ a })
// })
// function move(req, res) {
//   let timer = setInterval(hello, 1000)
//   function hello() {
//     if (a == 0) {
//       clearInterval(timer)
//     }
//     a -= 1;
//     console.log(a)
//   }
// }

router.post("/programming/task/:id", async (req, res) => {
    console.log(req.body)
    

})
module.exports = router
