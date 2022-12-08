const Budget = require("../models/budget");
const Transaction = require("../models/transaction");

module.exports = {
    index,
    new: newBudget,
    create,
    show,
    delete: deleteBudget
}

async function deleteBudget (req, res, next) {
    try {
        console.log("Delete something ====")
        const budgetDoc = await Budget.findByIdAndDelete(req.params.id);
        res.redirect("/budgets")
    } catch {
        console.log(err);
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