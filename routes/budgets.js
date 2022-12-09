const express = require('express');
const router = express.Router();
const budgetCtrl = require('../controllers/budgets');
const isLoggedIn = require('../config/auth');
const budget = require('../models/budget');

router.get('/new', budgetCtrl.new);
router.get('/', budgetCtrl.index);
router.post('/', budgetCtrl.create);
router.get('/:id', budgetCtrl.show)
router.delete('/:id', budgetCtrl.delete)
router.get('/:id/edit', budgetCtrl.edit)
router.put('/:id', budgetCtrl.update)

module.exports = router;