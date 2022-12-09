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
        const updateDoc = await Budget.updateOne({_id: req.params.id}, {
            title: req.body.title,
            amount: req.body.amount
        })
        res.redirect("/budgets")
    } catch (err) {
        console.log(err);
        res.send("Check Terminal for your errors - update function")
    }
}

async function edit (req, res, next) {
    try {
        const editDoc = await Budget.findById(req.params.id);
        console.log(editDoc, "=========editDoc")
        res.render("budgets/edit", {edit: editDoc});
    } catch (err) {
        console.log(err);
        res.send("Check Terminal for your errors")
    }
}

async function deleteBudget (req, res, next) {
    try {
        console.log("Delete something ====BUDGETS")
        const budgetDoc = await Budget.findByIdAndDelete(req.params.id);
        res.redirect("/budgets")
    } catch (err){
        console.log(err);
        res.send("Check Terminal for your errors")
    }
}

function show(req, res) {
    Budget.findById(req.params.id, function(err, budgetDoc) {
        console.log(err, "=========error")
        console.log(budgetDoc, "========BudgetDoc")
        Transaction.find({budget: budgetDoc._id}, function(err, transDoc){
            res.render("budgets/show", {budget: budgetDoc, transactions: transDoc});
        })
       
    })
}

function index(req, res) {
    console.log("Index function ran")
    Budget.find({}, function(err, budgetDocs) {
        // console.log(budgetDocs, ",<<<<<<<<< budgetDocs")
        res.render("budgets/index", { budgets: budgetDocs });
    });
    
}

function newBudget(req, res) {
    console.log("New Budget function - controllers/budgets")
    res.render("budgets/new");
}

function create(req, res) {
    console.log("You created!!! - controllers/budgets")
    
    const budget = new Budget(req.body);
    budget.save(function(err) {
        if(err) return res.render("budgets/new");
        
        // console.log("=============budgetDoc from the db");
        // console.log(budgetDoc);
        // console.log(budget, "<<<<<<<< Budget")
        res.redirect("/budgets/");
    });
}