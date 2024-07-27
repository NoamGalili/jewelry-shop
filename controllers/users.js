const usersModel = require('../models/users')


function getLogin(req, res)
{
    res.render('login.ejs')
}

function getRegister (req, res)
{
    res.render('register.ejs')
}

function getpayment (req, res)
{
    res.render('payment.ejs')
}

function getCredit (req, res)
{
    res.render('credit.ejs')
}

function getMyorders (req, res)
{
    res.render('myorders.ejs')
}

module.exports = 
{
    getLogin,
    getRegister,
    getpayment,
    getCredit,
    getMyorders
}