// routes/cart.js

const express = require('express');
const router = express.Router();
const { saveCart, showPaymentPage } = require('../controllers/cartController');

// מסלול לשמירת נתוני העגלה ב-session
router.post('/cart', saveCart);

// מסלול לטעינת דף התשלום עם סכום ההזמנה
router.get('/payment', showPaymentPage);

module.exports = router;
