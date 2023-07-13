const express = require('express')
const path = require('path')
const authRoutes = require('./routes/auth')
const taskRoutes = require('./routes/task')
const programmingRoutes = require('./routes/programming')
const Quiz = require('./models/quiz')
const fs = require('fs/promises')
const user_data = require('./models/user_data')

const app = express()
// Using this middleware to parse req.body in json format
app.use(express.json())

// setting views and view engine

// Setting view engine tp ejs files
app.set("view engine", "ejs")
// setting path for ejs files
app.set("views", path.join("./views"))
// Setting path to render css
app.use(express.static(__dirname));

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.render("front")
})
app.get('/home', (req, res) => {
  res.render("home")
})
app.get('/courses', (req, res) => {
  res.render('courses')
})

// Using auth routes in our server files which take access from routes folder
app.use(authRoutes)
//
app.use(taskRoutes)
// Using All routes of programming basics course from programming reoutes
app.use(programmingRoutes)

// Listening on port defined in .env files else on port 8080
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

