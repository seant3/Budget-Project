var express = require('express');
var router = express.Router();
const budgetCtrl = require('../controllers/budgets');
const isLoggedIn = require('../config/auth')

router.get('/', budgetCtrl.index);

module.exports = router;