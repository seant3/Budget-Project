const budget = require("../models/budget")
const Budget = require("../models/budget")
const Transaction = require("../models/transaction")

module.exports = {
    new: newTransaction,
    create,
    delete: deleteTransaction,
    edit,
    update
}

async function update (req, res, next) {
    const transaction = await Transaction.findById(req.params.id)
    try {
        await Transaction.updateOne({_id: req.params.id}, {
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date
        })
        res.redirect(`/budgets/${transaction.budget}`)
    } catch (err) {
        res.send("Check Terminal for your errors - update function")
    }
}

async function edit (req, res, next) {
    try {
        const editDoc = await Transaction.findById(req.params.id);
        res.render("transactions/edit", {edit: editDoc});
    } catch (err) {
        res.send("Check Terminal for your errors - Edit Function Transactions")
    }
}

async function deleteTransaction (req, res, next) {

    try {
        const tranDoc = await Transaction.findByIdAndDelete(req.params.id);
        res.redirect(`/budgets/${tranDoc.budget._id}`)
    } catch (err) {
        res.send("Check Terminal for your errors")
    }
}

function newTransaction(req, res) {
    res.render('transactions/new', {budgetID: req.params.id})
}

function create(req, res) {
    req.body.budget = req.params.id
    budget.user = req.user._id;

    const transaction = new Transaction(req.body)

    transaction.save(req.body, function (err, tranDoc) {    
        res.redirect(`/budgets/${req.params.id}`)
    });
}