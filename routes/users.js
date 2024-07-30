const express = require('express')

const router = express.Router()

const usersController = require('../controllers/users')

router.route("/login.ejs").get(usersController.getLogin)
router.route("/register.ejs").get(usersController.getRegister)
router.route("/payment.ejs").get(usersController.getPayment)
router.route("/credit.ejs").get(usersController.getCredit)

//---add stuff that dont belong to this stream here

router.route("/Myorders.ejs").get(usersController.getLogin)
router.route("/Myprofile.ejs").get(usersController.getLogin)
router.route("/branches.ejs").get(usersController.getLogin)
router.route("/forgetpassword.ejs").get(usersController.getLogin)

//---
module.exports = router