const express = require('express')
const router = express.Router()
const jewelriesController = require('../controllers/jewelries')// bringing the jewlery fuunctions
const Jewelry = require('../models/jewelries'); // Adjust the path according to your project structure


router.get('/jewelries', async (req, res) => {
    try {
        const jewelryType = req.query.type || 'All'; // You can pass the jewelry type as a query parameter or set a default value
        const jewelries = await Jewelry.find({ type: jewelryType }); // Adjust the query according to your schema

        res.render('jewelries', {
            JewelryType: jewelryType,
            jewelries: jewelries
        });
    } catch (error) {
        console.error('Error fetching jewelries:', error);
        res.status(500).send('Server Error');
    }
});


router.route("/").get(jewelriesController.getNewjewelries) //redirecting / to controller.
router.route("/jewelry.ejs").get(jewelriesController.getJewelryByID) 
router.route("/deleteJewelry.ejs").get(jewelriesController.deleteJewelry)
router.route("/addjewelry.ejs").get(jewelriesController.addJewelry)
router.route("/jewelries.ejs").get(jewelriesController.getAlljewelries)


module.exports = router