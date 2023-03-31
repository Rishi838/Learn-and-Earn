const express = require('express')
const path = require('path')
const authRoutes = require('./routes/auth')
const taskRoutes = require('./routes/task')
const programmingRoutes = require('./routes/programming')

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

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.render("front")
})
app.get('/home', (req, res) => {
  res.render("home")
})
app.get('/programming', (req, res) => {
  res.render("programming")
})
app.get('/courses',(req,res)=>{
  res.render('courses')
})



// Using auth routes in our server files which take access from routes folder
app.use(authRoutes)
app.use(taskRoutes)
app.use(programmingRoutes)

// Listening on port defined in .env files else on port 8080
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
