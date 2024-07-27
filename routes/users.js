const express = require('express')

const router = express.Router()

const usersController = require('../controllers/users')

router.route("/login.ejs").get(usersController.getLogin)
router.route("/register.ejs").get(usersController.getRegister)
router.route("/payment.ejs").get( usersController.getpayment)
router.route("/credit.ejs").get(usersController.getCredit)

//---add stuff that dont belong to this stream here



//---
module.exports = router