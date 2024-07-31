

const express = require('express');
const router = express.Router();
const jewelriesController = require('../controllers/jewelries'); // bringing the jewelry functions

router.get('/jewelries.ejs', jewelriesController.getJewelriesByType); // Use the controller function



router.route("/")
    .get(jewelriesController.getNewjewelries); // Redirecting / to controller.

router.route("/jewelry.ejs")
    .get(jewelriesController.getJewelryByID);

router.route("/deleteJewelry.ejs")
    .get(jewelriesController.deleteJewelry);

router.route("/addjewelry.ejs")
    .get(jewelriesController.getaddJewelrypj);

router.route("/jewelries.ejs")
    .get(jewelriesController.getAlljewelries);

module.exports = router;
