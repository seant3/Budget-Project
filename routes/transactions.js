const express = require('express');
const router = express.Router();
const transactionCtrl = require('../controllers/transactions');
const isLoggedIn = require('../config/auth')

router.get('/budgets/:id/transactions/new', isLoggedIn, transactionCtrl.new);
router.post('/budgets/:id/transactions', isLoggedIn, transactionCtrl.create)
router.delete('/budgets/:id/transactions', isLoggedIn, transactionCtrl.delete)
router.get('/transactions/:id/edit', isLoggedIn, transactionCtrl.edit)
router.put('/transactions/:id', isLoggedIn, transactionCtrl.update)

module.exports = router;