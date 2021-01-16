const indexController = require('../controllers/index');

const express = require('express');

const router = new express.Router();

router.get('/', indexController.getIndex);

module.exports = router;
