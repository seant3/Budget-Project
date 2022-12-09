const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
        title: {
            type: String,
        },  
        transactions: [{type: Schema.Types.ObjectId, ref: 'Transaction'}]
})

module.exports = mongoose.model("Budget", budgetSchema);
