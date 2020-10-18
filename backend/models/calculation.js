const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calculationSchema = new Schema({
    formula: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model("Calculation", calculationSchema, "calculations")