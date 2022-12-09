const express = require('express');
const router = express.Router();
const transactionCtrl = require('../controllers/transactions');
const isLoggedIn = require('../config/auth')

router.get('/budgets/:id/transactions/new', transactionCtrl.new);
router.post('/budgets/:id/transactions', transactionCtrl.create)
router.delete('/budgets/:id/transactions', transactionCtrl.delete)
router.get('/transactions/:id/edit', transactionCtrl.edit)
router.put('/transactions/:id', transactionCtrl.update)

module.exports = router;