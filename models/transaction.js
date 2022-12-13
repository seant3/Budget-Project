const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    amount: {type: Number, min: 0},
    date: {type: Date},
    budget: {type: Schema.Types.ObjectId, ref: 'Budget'},
    category: {
        type: String,
        enum: ["Housing","Transportation","Food","Utilities","Insurance","Healthcare","Saving","Debt","Personal","Entertainment","Other"]
    }
})

module.exports = mongoose.model("Transaction", transactionSchema);
