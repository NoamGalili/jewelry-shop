const express = require('express')

const router = express.Router()

const usersController = require('../controllers/users')

router.route("/login.ejs").get(usersController.getLogin)
router.route("/register.ejs").get(usersController.getRegister)
router.route("/Myprofile.ejs").get(usersController.getLogin)
router.route("/forgetpassword.ejs").get(usersController.getforgetpassword)

//---add stuff that dont belong to this stream here





//---
module.exports = router