const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
        title: {
            type: String,
            required: true
        },  
        transactions: [{type: Schema.Types.ObjectId, ref: 'Transaction'}]
})

module.exports = mongoose.model("Budget", budgetSchema);
