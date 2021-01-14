const accountControllers = require('../controllers/account');

const express = require('express');
const router = new express.Router();

router.get('/my_funds', accountControllers.getFunds);

router.get('/create_account', accountControllers.getOpenAccount);

router.get('/close_account', accountControllers.getCloseAccount);

router.get('/insert_funds', accountControllers.getInsertFunds);

router.get('/withdraw_funds', accountControllers.getWithdrawFunds);

module.exports = router;
