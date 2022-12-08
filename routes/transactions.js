const express = require('express');
const { route } = require('.');
const router = express.Router();
const transactionCtrl = require('../controllers/transactions');
const isLoggedIn = require('../config/auth')

router.get('/new', transactionCtrl.new);

module.exports = router;