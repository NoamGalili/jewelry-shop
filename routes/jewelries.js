const express = require('express')
const router = express.Router()
const jewelriesController = require('../controllers/jewelries')// bringing the jewlery fuunctions

router.route("/").get(jewelriesController.getAlljewelries) //redirecting / to controller.
router.route("/jewelry.ejs").get(jewelriesController.getJewelryByID) 
router.route("/deleteJewelry.ejs").get(jewelriesController.deleteJewelry)
router.route("/addjewelry.ejs").get(jewelriesController.addJewelry)


module.exports = router