const express = require('express');
const userController = require('../controllers/user');

const router = new express.Router();

//INDEX
router.get('/', userController.getIndex);
// GET users
router.get('/user', userController.getAddUser);
//POST users
router.post('/user', userController.postAddUser);

module.exports = router;
