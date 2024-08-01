const express = require('express')
const router = express.Router()

const jewelriesController = require('../controllers/jewelries')

router.route('/search/: type').get(jewelriesController.getAlljewelries)

router.route('/addJewelry').post(jewelriesController.addJewelry)




module.exports = router;