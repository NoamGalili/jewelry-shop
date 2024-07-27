const express = require('express')

const router = express.Router()

const jewelriesController = require('../controllers/jewelries')

router.route("/").get(jewelriesController.getAlljewelries) //redirecting / to controller.
router.route("/jewelry").get(jewelriesController.getJewelry) 
router.route("/deleteJewelry").get(jewelriesController.deleteJewelry)

//might move to users route??
router.route("/login").get(jewelriesController.getLogin)
router.route("/register.ejs").get(jewelriesController.getRegister)
router.route("/payment.ejs").get( jewelriesController.getpayment)
router.route("/credit.ejs").get(jewelriesController.getCredit)
//----

module.exports = router