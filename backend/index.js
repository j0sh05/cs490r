const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8932

// TODO Connect to Database here

var db = mysql.createConnection({
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

app.get('/test', (req,res) => {
    console.log("Sending Test Message...")

    res.status(200).json({
        message: 'Connection Successful'
    })
})

app.get('/allfiles', (req, res) => {
    let sql = 'SELECT * from cis2019'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Getting all Files...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
})


app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(port, () => console.log(`Svelte Server started on Port ${port} in ${process.env.NODE_ENV} mode!`))