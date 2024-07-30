const ordersService = require('../services/orders')

function getMyOrders (req, res)
{
    res.render('myorders.ejs')
}

function getPayment (req, res)
{
    res.render('payment.ejs')
}

function getCredit (req, res)
{
    res.render('credit.ejs')
}

module.exports = 
{
    getMyOrders,
    getPayment,
    getCredit
}