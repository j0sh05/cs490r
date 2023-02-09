const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { db } = require('../index');

router.route("/allAttemptedCredits").get(asyncHandler(async (req, res) => {
    let sql = 'SELECT credits_attempted AS data from cis2019'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending all credits attempted...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

router.route("/allPassedCredits").get(asyncHandler(async (req, res) => {
    let sql = 'SELECT credits_passed AS data from cis2019'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending all credits passed...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

router.route("/gpa").get(asyncHandler(async (req, res) => {
    let sql = 'SELECT gpa AS data from cis2019'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Sending all gpa...')
        res.status(200).json({
            message: 'Received all Files',
            result
        })
    })
}))

module.exports = router