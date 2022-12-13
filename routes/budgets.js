const express = require('express');
const router = express.Router();
const budgetCtrl = require('../controllers/budgets');
const isLoggedIn = require('../config/auth');
const budget = require('../models/budget');

router.get('/new', isLoggedIn, budgetCtrl.new);
router.get('/', isLoggedIn, budgetCtrl.index);
router.post('/', isLoggedIn, budgetCtrl.create);
router.get('/:id', isLoggedIn, budgetCtrl.show)
router.delete('/:id', isLoggedIn, budgetCtrl.delete)
router.get('/:id/edit', isLoggedIn, budgetCtrl.edit)
router.put('/:id', isLoggedIn, budgetCtrl.update)

module.exports = router;