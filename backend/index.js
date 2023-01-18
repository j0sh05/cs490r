const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8932

// TODO Connect to Database here

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(port, () => console.log(`Svelte Server started on Port ${port} in ${process.env.NODE_ENV} mode!`))