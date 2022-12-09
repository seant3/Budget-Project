const Budget = require("../models/budget")
const Transaction = require("../models/transaction")

module.exports = {
    new: newTransaction,
    create,
    delete: deleteTransaction
}

// function deleteTransaction(req, res) {
//     Budget.findOne({'transactions._id': req.params.id, "transactions.user": req.user._id},
//     function(err, budgetDoc){
//         console.log(err, "Here is the error ========")
//         if(!budgetDoc) return res.redirect('/budgets');

//         budgetDoc.transactions.remove(req.params.id);

//         budgetDoc.save(function(err) {
//             if(err) return res.send("error, check terminal");
//             res.redirect(`/budgets/${budgetDoc._id}`)
//         })
//     })
// }

async function deleteTransaction (req, res, next) {
    console.log('Delete Something in TRANSACTIONS')
    req.body.transactions = req.params.id
    await Transaction.findByIdAndDelete(req.params.id)
    res.redirect(`/budgets`);

    // try {
    //     console.log('Delete something ====TRANSACTIONS')
    //     const tranDoc = await Transaction.findByIdAndDelete(req.params.id);
    //     console.log(tranDoc, "=========== Console log of tranDoc")
    //     res.redirect(`/budgets/${tranDoc.budget}`)
    // } catch {
    //     console.log(err);
    //     res.send('Check Terminal for your errors')
    // }
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