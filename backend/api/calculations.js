const express = require('express');
const router = express.Router();
const DB_FILE = '../db.json';
const DB = require(DB_FILE)
const fs = require('fs')


function readFromDB(cb) {
    fs.readFile(DB_FILE, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const data = JSON.parse(fileData)
            return cb && cb(null, data)
        } catch (err) {
            return cb && cb(err)
        }
    })
}


function writeToDB(str, cb) {
    fs.writeFile(DB_FILE, str, err => {
        return err
    })
}

function saveToDB(calculation, cb) {
    readFromDB(DB_FILE, (err, data) => {
        if (err) {
            return cb && cb(err)
        } else {
            data.push(calculation)
            const jsonString = JSON.stringify(data)
            return cb && cb(writeToDB(jsonString), data)
        }
    })
}

router.get('/', (req, res) => {
    readFromDB(DB_FILE, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).json({
                "error": err,
                "message": "Error reading calculation"
            })
        } else {
            res.json(data)
        }
    })
})

router.post('/', (req, res) => {
    const {formula, result} = req.body;
    const calculation = {
        formula: formula,
        result: result
    }
    saveToDB(calculation, (err, data) => {
            if (err) {
                console.log(err)
                res.status(400).json({
                    "error": err,
                    "message": "Error saving calculation"
                })
            } else {
                res.status(201).json(calculation)
            }
        }
    )
})
module.exports = router