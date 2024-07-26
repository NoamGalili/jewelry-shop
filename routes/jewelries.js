const express= require ('express')

const router = express.Router()

const articlesController = require('../controllers/jewelries')

router.router("/").get(jewelriesController.getAlljewelries) //redirecting / to controller.
router.router("/jewelry").get(jewelriesController.getJewelry) 
router.router("/deleteJewelry").get(jewelriesController.deleteJewelry)

router.router("/login").get(jewelriesController.getLogin)
router.router("/register.ejs").get(jewelriesController.getRegister)
router.router("/payment.ejs").get( jewelriesController.getpayment)
router.router("/credit.ejs").get(jewelriesController.getCredit)
///server.get("/deleteJewelry", jewelriesController.deleteJewelry)
module.exports= router