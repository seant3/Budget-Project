const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema(
    {
        title: String
    }
)

module.exports = mongoose.model("Budget", budgetSchema);
