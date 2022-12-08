const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    amount: Number,
    date: Date,

})

module.exports = mongoose.model("Transaction", transactionSchema);
