const express = require('express')

const app = express()


// Rendering Programming page
app.get('/programming', (req, res) => {
    res.render("programming")
  })

// Rendering module 1 page
app.get('/prog_m_1', (req, res) => {
    res.render("./programming_modules/module1/m1")
})
// Rendering all 9 tasks of module 1 
app.get('/prog_m_1/task1', (req, res) => {
    res.render("./programming_modules/module1/task1")
})
app.get('/prog_m_1/task2', (req, res) => {
    res.render("./programming_modules/module1/task2")
})
app.get('/prog_m_1/task3', (req, res) => {
    res.render("./programming_modules/module1/task3")
})
app.get('/prog_m_1/task4', (req, res) => {
    res.render("./programming_modules/module1/task4")
})
app.get('/prog_m_1/task5', (req, res) => {
    res.render("./programming_modules/module1/task5")
})
app.get('/prog_m_1/task6', (req, res) => {
    res.render("./programming_modules/module1/task6")
})
app.get('/prog_m_1/task7', (req, res) => {
    res.render("./programming_modules/module1/task7")
})
app.get('/prog_m_1/task8', (req, res) => {
    res.render("./programming_modules/module1/task8")
})
app.get('/prog_m_1/task9', (req, res) => {
    res.render("./programming_modules/module1/task9")
})

// Rendering module 2 page
app.get('/prog_m_2', (req, res) => {
    res.render("./programming_modules/module2/m2")
})
// Rendering all 9 tasks of module 2 
app.get('/prog_m_2/task1', (req, res) => {
    res.render("./programming_modules/module2/task1")
})
app.get('/prog_m_2/task2', (req, res) => {
    res.render("./programming_modules/module2/task2")
})
app.get('/prog_m_2/task3', (req, res) => {
    res.render("./programming_modules/module2/task3")
})
app.get('/prog_m_2/task4', (req, res) => {
    res.render("./programming_modules/module2/task4")
})
app.get('/prog_m_2/task5', (req, res) => {
    res.render("./programming_modules/module2/task5")
})
app.get('/prog_m_2/task6', (req, res) => {
    res.render("./programming_modules/module2/task6")
})
app.get('/prog_m_2/task7', (req, res) => {
    res.render("./programming_modules/module2/task7")
})
app.get('/prog_m_2/task8', (req, res) => {
    res.render("./programming_modules/module2/task8")
})
app.get('/prog_m_2/task9', (req, res) => {
    res.render("./programming_modules/module2/task9")
})

// Rendering module 3 page
app.get('/prog_m_3', (req, res) => {
    res.render("./programming_modules/module3/m3")
})
// Rendering all 9 tasks of module 3 
app.get('/prog_m_3/task1', (req, res) => {
    res.render("./programming_modules/module3/task1")
})
app.get('/prog_m_3/task2', (req, res) => {
    res.render("./programming_modules/module3/task2")
})
app.get('/prog_m_3/task3', (req, res) => {
    res.render("./programming_modules/module3/task3")
})
app.get('/prog_m_3/task4', (req, res) => {
    res.render("./programming_modules/module3/task4")
})
app.get('/prog_m_3/task5', (req, res) => {
    res.render("./programming_modules/module3/task5")
})
app.get('/prog_m_3/task6', (req, res) => {
    res.render("./programming_modules/module3/task6")
})
app.get('/prog_m_3/task7', (req, res) => {
    res.render("./programming_modules/module3/task7")
})
app.get('/prog_m_3/task8', (req, res) => {
    res.render("./programming_modules/module3/task8")
})
app.get('/prog_m_3/task9', (req, res) => {
    res.render("./programming_modules/module3/task9")
})

// Rendering module 4 page
app.get('/prog_m_4', (req, res) => {
    res.render("./programming_modules/module4/m4")
})
// Rendering all 9 tasks of module 4 
app.get('/prog_m_4/task1', (req, res) => {
    res.render("./programming_modules/module4/task1")
})
app.get('/prog_m_4/task2', (req, res) => {
    res.render("./programming_modules/module4/task2")
})
app.get('/prog_m_4/task3', (req, res) => {
    res.render("./programming_modules/module4/task3")
})
app.get('/prog_m_4/task4', (req, res) => {
    res.render("./programming_modules/module4/task4")
})
app.get('/prog_m_4/task5', (req, res) => {
    res.render("./programming_modules/module4/task5")
})
app.get('/prog_m_4/task6', (req, res) => {
    res.render("./programming_modules/module4/task6")
})
app.get('/prog_m_4/task7', (req, res) => {
    res.render("./programming_modules/module4/task7")
})
app.get('/prog_m_4/task8', (req, res) => {
    res.render("./programming_modules/module4/task8")
})
app.get('/prog_m_4/task9', (req, res) => {
    res.render("./programming_modules/module4/task9")
})

// Rendering module 5 page
app.get('/prog_m_5', (req, res) => {
    res.render("./programming_modules/module5/m5")
})
// Rendering all 9 tasks of module 5 
app.get('/prog_m_5/task1', (req, res) => {
    res.render("./programming_modules/module5/task1")
})
app.get('/prog_m_5/task2', (req, res) => {
    res.render("./programming_modules/module5/task2")
})
app.get('/prog_m_5/task3', (req, res) => {
    res.render("./programming_modules/module5/task3")
})
app.get('/prog_m_5/task4', (req, res) => {
    res.render("./programming_modules/module5/task4")
})
app.get('/prog_m_5/task5', (req, res) => {
    res.render("./programming_modules/module5/task5")
})
app.get('/prog_m_5/task6', (req, res) => {
    res.render("./programming_modules/module5/task6")
})
app.get('/prog_m_5/task7', (req, res) => {
    res.render("./programming_modules/module5/task7")
})
app.get('/prog_m_5/task8', (req, res) => {
    res.render("./programming_modules/module5/task8")
})
app.get('/prog_m_5/task9', (req, res) => {
    res.render("./programming_modules/module5/task9")
})

// Rendering module 6 page
app.get('/prog_m_6', (req, res) => {
    res.render("./programming_modules/module6/m6")
})
// Rendering all 9 tasks of module 6 
app.get('/prog_m_6/task1', (req, res) => {
    res.render("./programming_modules/module6/task1")
})
app.get('/prog_m_6/task2', (req, res) => {
    res.render("./programming_modules/module6/task2")
})
app.get('/prog_m_6/task3', (req, res) => {
    res.render("./programming_modules/module6/task3")
})
app.get('/prog_m_6/task4', (req, res) => {
    res.render("./programming_modules/module6/task4")
})
app.get('/prog_m_6/task5', (req, res) => {
    res.render("./programming_modules/module6/task5")
})
app.get('/prog_m_6/task6', (req, res) => {
    res.render("./programming_modules/module6/task6")
})
app.get('/prog_m_6/task7', (req, res) => {
    res.render("./programming_modules/module6/task7")
})
app.get('/prog_m_6/task8', (req, res) => {
    res.render("./programming_modules/module6/task8")
})
app.get('/prog_m_6/task9', (req, res) => {
    res.render("./programming_modules/module6/task9")
})

// Rendering module 7 page
app.get('/prog_m_7', (req, res) => {
    res.render("./programming_modules/module7/m7")
})
// Rendering all 9 tasks of module 7 
app.get('/prog_m_7/task1', (req, res) => {
    res.render("./programming_modules/module7/task1")
})
app.get('/prog_m_7/task2', (req, res) => {
    res.render("./programming_modules/module7/task2")
})
app.get('/prog_m_7/task3', (req, res) => {
    res.render("./programming_modules/module7/task3")
})
app.get('/prog_m_7/task4', (req, res) => {
    res.render("./programming_modules/module7/task4")
})
app.get('/prog_m_7/task5', (req, res) => {
    res.render("./programming_modules/module7/task5")
})
app.get('/prog_m_7/task6', (req, res) => {
    res.render("./programming_modules/module7/task6")
})
app.get('/prog_m_7/task7', (req, res) => {
    res.render("./programming_modules/module7/task7")
})
app.get('/prog_m_7/task8', (req, res) => {
    res.render("./programming_modules/module7/task8")
})
app.get('/prog_m_7/task9', (req, res) => {
    res.render("./programming_modules/module7/task9")
})

// Rendering module 8 page
app.get('/prog_m_8', (req, res) => {
    res.render("./programming_modules/module8/m8")
})
// Rendering all 9 tasks of module 8 
app.get('/prog_m_8/task1', (req, res) => {
    res.render("./programming_modules/module8/task1")
})
app.get('/prog_m_8/task2', (req, res) => {
    res.render("./programming_modules/module8/task2")
})
app.get('/prog_m_8/task3', (req, res) => {
    res.render("./programming_modules/module8/task3")
})
app.get('/prog_m_8/task4', (req, res) => {
    res.render("./programming_modules/module8/task4")
})
app.get('/prog_m_8/task5', (req, res) => {
    res.render("./programming_modules/module8/task5")
})
app.get('/prog_m_8/task6', (req, res) => {
    res.render("./programming_modules/module8/task6")
})
app.get('/prog_m_8/task7', (req, res) => {
    res.render("./programming_modules/module8/task7")
})
app.get('/prog_m_8/task8', (req, res) => {
    res.render("./programming_modules/module8/task8")
})
app.get('/prog_m_8/task9', (req, res) => {
    res.render("./programming_modules/module8/task9")
})
// Rendering module 9 page
app.get('/prog_m_9', (req, res) => {
    res.render("./programming_modules/module9/m9")
})
// Rendering all 9 tasks of module 9
app.get('/prog_m_9/task1', (req, res) => {
    res.render("./programming_modules/module9/task1")
})
app.get('/prog_m_9/task2', (req, res) => {
    res.render("./programming_modules/module9/task2")
})
app.get('/prog_m_9/task3', (req, res) => {
    res.render("./programming_modules/module9/task3")
})
app.get('/prog_m_9/task4', (req, res) => {
    res.render("./programming_modules/module9/task4")
})
app.get('/prog_m_9/task5', (req, res) => {
    res.render("./programming_modules/module9/task5")
})
app.get('/prog_m_9/task6', (req, res) => {
    res.render("./programming_modules/module9/task6")
})
app.get('/prog_m_9/task7', (req, res) => {
    res.render("./programming_modules/module9/task7")
})
app.get('/prog_m_9/task8', (req, res) => {
    res.render("./programming_modules/module9/task8")
})
app.get('/prog_m_9/task9', (req, res) => {
    res.render("./programming_modules/module9/task9")
})

// Rendering module 10 page
app.get('/prog_m_10', (req, res) => {
    res.render("./programming_modules/module10/m10")
})
// Rendering all 9 tasks of module 10 
app.get('/prog_m_10/task1', (req, res) => {
    res.render("./programming_modules/module10/task1")
})
app.get('/prog_m_10/task2', (req, res) => {
    res.render("./programming_modules/module10/task2")
})
app.get('/prog_m_10/task3', (req, res) => {
    res.render("./programming_modules/module10/task3")
})
app.get('/prog_m_10/task4', (req, res) => {
    res.render("./programming_modules/module10/task4")
})
app.get('/prog_m_10/task5', (req, res) => {
    res.render("./programming_modules/module10/task5")
})
app.get('/prog_m_10/task6', (req, res) => {
    res.render("./programming_modules/module10/task6")
})
app.get('/prog_m_10/task7', (req, res) => {
    res.render("./programming_modules/module10/task7")
})
app.get('/prog_m_10/task8', (req, res) => {
    res.render("./programming_modules/module10/task8")
})
app.get('/prog_m_10/task9', (req, res) => {
    res.render("./programming_modules/module10/task9")
})
module.exports = app
