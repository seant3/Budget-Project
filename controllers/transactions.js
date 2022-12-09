const Budget = require("../models/budget")
const Transaction = require("../models/transaction")

module.exports = {
    new: newTransaction,
    create,
    delete: deleteTransaction
}

async function deleteTransaction (req, res, next) {
//     console.log('Delete Something in TRANSACTIONS')
//     req.body.transactions = req.params.id
//     await Transaction.findByIdAndDelete(req.params.id)
//     res.redirect(`/budgets/show`);

    try {
        // console.log("Delete something ====TRANSACTIONS")
        const budget = new Budget(req.body)
        const tranDoc = await Transaction.findByIdAndDelete(req.params.id);
        // console.log(req.params.id, "============REQ PARAMS ID")
        // console.log(tranDoc.budget, "=========== Console log of tranDoc")
        // console.log(budget, "===========info for budget")
        
        res.redirect(`/budgets/${tranDoc.budget._id}`)
    } catch (err) {
        console.log(err);
        res.send("Check Terminal for your errors")
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