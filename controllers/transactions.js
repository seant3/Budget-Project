const Budget = require("../models/budget")
const Transaction = require("../models/transaction")

module.exports = {
    new: newTransaction,
    create,
    delete: deleteTransaction
}

async function deleteTransaction (req, res, next) {
    try {
        console.log('Delete something ====')
        const tranDoc = await Transaction.findByIdAndDelete(req.params.id);
        console.log(tranDoc, "=========== Console log of tranDoc")
        res.redirect(`/budgets/${tranDoc.transactionId}`)
    } catch {
        console.log(err);
        res.send('Check Terminal for your errors')
    }
}

function newTransaction(req, res) {
    console.log("new transaction function - controllers/transactions")
    res.render('transactions/new', {budgetID: req.params.id})
}

function create(req, res) {
    console.log("You created!!! - controllers/transactions")
    req.body.budget = req.params.id
    console.log(req.body, "req.body console")
    const transaction = new Transaction(req.body)

    transaction.save(req.body, function (err, tranDoc) {
        console.log(err, "<<<< Error from create")
        console.log(tranDoc, " <<<< Transaction info")
        

        res.redirect(`/budgets/${req.params.id}`)
    });
}