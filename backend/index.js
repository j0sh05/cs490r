const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8932
const asyncHandler = require('express-async-handler')
const cors = require('cors')


// Connecting to Database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.SQL_USER, 
    password: process.env.SQL_PASSWORD,
    socketPath: '/tmp/mysql.sock',
    database: 'sys'
})

db.connect((err) => {
    if (err) throw err
    console.log(`Connected to MySql Database`)
})

const app = express()

// Allowing CORS
app.use(cors())

// API Requests

/*
    Project 1
*/

app.get('/allfiles', asyncHandler(async (req, res) => {
    let sql = 'SELECT * from cis2019'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all Files...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get('/csmajors', asyncHandler(async (req, res) => {
    let sql = "SELECT * from cis2019 WHERE major='Computer Science'"

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all Computer Science Students...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get('/allfemales', asyncHandler(async (req, res) => {
    let sql = "SELECT * from cis2019 WHERE gender='F'"

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all Female Students...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get('/alleast', asyncHandler(async (req, res ) => {
    let sql = "SELECT * from cis2019 WHERE home='Asia' OR home='Pacific'"

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all Asia and Pacific Students...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get('/younglings', asyncHandler(async (req, res) => {
    let sql = "SELECT * from cis2019 WHERE agegroup='18-21' AND gpa BETWEEN 3.5 AND 3.9"

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all Younglings...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get('/topstudents', asyncHandler(async (req, res) => {
    let sql = "SELECT * from cis2019 WHERE gpa BETWEEN 3.8 AND 4.0"

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all smart people...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get('/usmainland', asyncHandler(async (req, res) => {
    let sql = "SELECT * from cis2019 WHERE home='US Mainland'"

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all gringos...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

/*
    Project 2
*/
app.get("/numOfMajors", asyncHandler(async (req, res) => {
    let sql = 'SELECT major, COUNT(*) AS numMajors from cis2019 Group By major'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('The number of students in each major...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/studentsByHome", asyncHandler(async (req, res) => {
    let sql = 'SELECT home, COUNT(*) AS numHome from cis2019 Group By home'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('The number of students from each home...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/avgGPA", asyncHandler(async (req, res) => {
    let sql = 'SELECT avg(gpa) AS gpa, major from cis2019 Group By major'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('The avg gpa in each major...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/avgCredits", asyncHandler(async (req, res) => {
    let sql = 'SELECT avg(credits_attempted) AS credits, gradyear from cis2019 Group By gradyear Order by gradyear'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('The avg credits attempted each year...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/avgPassed", asyncHandler(async (req, res) => {
    let sql = 'SELECT avg(credits_passed) AS credits, gradyear from cis2019 Group By gradyear Order by gradyear'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('The avg credits passed each year...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/allGPA", asyncHandler(async (req, res) => {
    let sql = 'SELECT gpa from cis2019 ORDER BY gpa'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('all GPAs...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

/*
    Project 3
*/

app.get("/allAttemptedCredits", asyncHandler(async (req, res) => {
    let sql = 'SELECT credits_attempted AS data from cis2012'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending all credits attempted...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/allPassedCredits", asyncHandler(async (req, res) => {
    let sql = 'SELECT credits_passed AS data from cis2012'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending all credits passed...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/gpa", asyncHandler(async (req, res) => {
    let sql = 'SELECT GPA AS data from cis2012'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending all gpa...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get("/age", asyncHandler(async (req, res) => {
    let sql = 'SELECT age AS data from cis2012'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending all ages...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

/*
    Project 4
*/

app.get('/getDatabase2019', asyncHandler(async (req, res) => {
    let sql = 'SELECT * from cis2019'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending 2019...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

app.get('/getDatabase2012', asyncHandler(async (req, res) => {
    let sql = 'SELECT * from cis2012'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending 2012...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

// Model for JSON
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => console.log(`Svelte Server started on Port ${port} in ${process.env.NODE_ENV} mode!`))