const usersService = require('../services/users.js')



function getMyProfile (req, res)
{
    res.render('myprofile.ejs')
}

function getRegister (req, res)
{
    res.render('register.ejs')
}

function getLogin(req, res)
{
    res.render('login.ejs')
}

//---add stuff that dont belong to this stream here

function getforgetpassword (req, res)
{
    res.render('forgetpassword.ejs')
}

//---

module.exports = 
{
    getMyProfile,
    getRegister,
    getLogin,
    getforgetpassword
}