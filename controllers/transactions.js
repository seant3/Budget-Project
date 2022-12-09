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
        const updateDoc = await Transaction.updateOne({_id: req.params.id}, {
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date
        })
        res.redirect(`/budgets/${transaction.budget}`)
    } catch (err) {
        console.log(err);
        res.send("Check Terminal for your errors - update function")
    }
}

async function edit (req, res, next) {
    try {
        const editDoc = await Transaction.findById(req.params.id);
        console.log(editDoc, "=========editDoc")
        res.render("transactions/edit", {edit: editDoc});
    } catch (err) {
        console.log(err);
        res.send("Check Terminal for your errors - Edit Function Transactions")
    }
}

async function deleteTransaction (req, res, next) {

    try {
        // console.log("Delete something ====TRANSACTIONS")
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
    // console.log("You created!!! - controllers/transactions")
    req.body.budget = req.params.id
    // console.log(req.body, "req.body console")
    const transaction = new Transaction(req.body)

    transaction.save(req.body, function (err, tranDoc) {
        // console.log(err, "<<<< Error from create")
        // console.log(tranDoc, " <<<< Transaction info")
        

        res.redirect(`/budgets/${req.params.id}`)
    });
}