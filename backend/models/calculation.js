const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calculationsSchema = new Schema({
    formula: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model("Calculation", calculationsSchema, "calculations")