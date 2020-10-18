const express = require('express');
const router = express.Router();
const Calculation = require('../models/calculation');


router.get('/', (req, res) => {
    Calculation.find()
        .then(calculations => res.json(calculations))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const {formula, result} = req.body;
    const newCalculation = new Calculation({
        formula: formula, result: result
    })
    newCalculation.save()
        .then(() => res.status(201).json({
            message: "Created calculation successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating calculation"
        }))
})
module.exports = router