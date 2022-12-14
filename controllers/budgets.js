const Budget = require("../models/budget");
const Transaction = require("../models/transaction");

module.exports = {
    index,
    new: newBudget,
    create,
    show,
    delete: deleteBudget,
    edit,
    update
}

async function update (req, res, next) {
    try {
        const updateDoc = await Budget.updateOne({_id: req.params.id, 'user': req.user._id}, {
            title: req.body.month,
            amount: req.body.amount
        })
        res.redirect("/budgets")
    } catch (err) {
        res.send("Check Terminal for your errors - update function")
    }
}

async function edit (req, res, next) {
    try {
        const editDoc = await Budget.findById({_id: req.params.id, 'user': req.user._id});
        res.render("budgets/edit", {edit: editDoc});
    } catch (err) {
        res.send("Check Terminal for your errors")
        
    }
}

async function deleteBudget (req, res, next) {
    try {
        const budgetDoc = await Budget.findByIdAndDelete({_id: req.params.id, 'user': req.user._id});
        res.redirect("/budgets")
    } catch (err){
        res.send("Check Terminal for your errors")
    }
}

function show(req, res) {
        Budget.findById(req.params.id, function(err, budgetDoc) {
            Transaction.find({budget: budgetDoc._id}, function(err, transDoc){
                res.render("budgets/show", {budget: budgetDoc, transactions: transDoc});
            })

        })
}

function index(req, res) {
    Budget.find({'user': req.user._id}, function(err, budgetDocs) {
        if(!budgetDocs) return res.redirect('/budgets');
        res.render("budgets/index", {budgets: budgetDocs });
        });
}

function newBudget(req, res) {
    res.render("budgets/new");
}

function create(req, res) {    
    const budget = new Budget(req.body);
    budget.user = req.user._id;
    budget.save(function(err) {
        if(err) return res.render("budgets/new");
        res.redirect("/budgets/");
    });
}