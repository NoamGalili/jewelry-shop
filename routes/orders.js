const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/orders')// bringing the jewlery fuunctions

router.route("/myOrders.ejs").get(ordersController.getMyOrders)
router.route("/payment.ejs").get(ordersController.getPayment)
router.route("/credit.ejs").get(ordersController.getCredit)

module.exports = router