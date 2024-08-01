const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register.ejs', userController.getRegister);
router.post('/register.ejs', userController.postRegister);

module.exports = router;
