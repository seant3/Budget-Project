const Budget = require("../models/budget")
const Transaction = require("../models/transaction")

module.exports = {
    new: newTransaction,
}

function newTransaction(req, res) {
    console.log("new transaction function - controllers/transactions")
    res.render('transactions/new')
}