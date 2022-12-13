const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const budgetSchema = new Schema({
        month: {
            type: String,
            enum: ["January","February","March","April","May","June","July","August","September","October","November","December",]
        },
        amount: {type: Number, min: 0},
        user: {type: Schema.Types.ObjectId, ref: "User"},
        transactions: [{type: Schema.Types.ObjectId, ref: "Transaction"}]
})

module.exports = mongoose.model("Budget", budgetSchema);
