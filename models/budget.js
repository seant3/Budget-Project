const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planningSchema = new Schema({
    category: {
        type: String,
        enum: ["Housing","Transportation","Food","Utilities","Insurance","Healthcare","Saving","Debt","Personal","Entertainment","Other"]
    },
    amount: {type: Number, min: 0},
})

const budgetSchema = new Schema({
        title: {
            type: String,
        },
        amount: {type: Number, min: 0},
        category: [planningSchema],
        transactions: [{type: Schema.Types.ObjectId, ref: "Transaction"}]
})

module.exports = mongoose.model("Budget", budgetSchema);
