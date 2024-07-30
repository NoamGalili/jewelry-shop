const usersService = require('../services/users')


function getLogin(req, res)
{
    res.render('login.ejs')
}

function getRegister (req, res)
{
    res.render('register.ejs')
}

function getPayment (req, res)
{
    res.render('payment.ejs')
}

function getCredit (req, res)
{
    res.render('credit.ejs')
}

//---add stuff that dont belong to this stream here

function getMyOrders (req, res)
{
    res.render('myorders.ejs')
}

function getMyProfile (req, res)
{
    res.render('myprofile.ejs')
}

function branches (req, res)
{
    res.render('branches.ejs')
}


function getforgetpassword (req, res)
{
    res.render('forgetpassword.ejs')
}

//---

module.exports = 
{
    getforgetpassword,
    getLogin,
    getRegister,
    getPayment,
    getCredit,
    getMyOrders
}