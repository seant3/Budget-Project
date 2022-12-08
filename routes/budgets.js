var express = require('express');
var router = express.Router();
const budgetCtrl = require('../controllers/budgets');
const isLoggedIn = require('../config/auth')

router.get('/', budgetCtrl.index);
router.get('/new', budgetCtrl.new);
router.post('/', budgetCtrl.create);

module.exports = router;