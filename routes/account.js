const accountControllers = require('../controllers/account');

const express = require('express');
const router = new express.Router();

router.get('/my_funds', accountControllers.getFunds);

router.get('/create_account', accountControllers.getCreateAccount);

router.get('/close_account', accountControllers.getCloseAccount);

router.get('/deposit', accountControllers.getDeposit);

router.get('/withdraw', accountControllers.getWithdraw);

module.exports = router;
