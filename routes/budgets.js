const express = require('express');
const { route } = require('.');
const router = express.Router();
const budgetCtrl = require('../controllers/budgets');
const isLoggedIn = require('../config/auth')

router.get('/new', budgetCtrl.new);
router.get('/', budgetCtrl.index);
router.post('/', budgetCtrl.create);

module.exports = router;