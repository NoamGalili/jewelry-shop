const express = require('express')
const router = express.Router()
const jewelriesController = require('../controllers/jewelries')// bringing the jewlery fuunctions

router.route("/").get(jewelriesController.getAlljewelries) //redirecting / to controller.
router.route("/jewelry.ejs").get(jewelriesController.getJewelry) 
router.route("/deleteJewelry.ejs").get(jewelriesController.deleteJewelry)


module.exports = router