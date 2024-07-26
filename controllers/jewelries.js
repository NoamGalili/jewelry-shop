const jewelriesModel = require('../models/jewelries')

function getAlljewelries(req, res)
{
    const jewelries = jewelriesModel.getAllJewelries()
    res.render('home.ejs',{ jewelries })
}

function getLogin(req, res)
{
    res.render('login.ejs')
}

function getRegister (req, res)
{
    res.render('register.ejs')
}

function getCredit (req, res)
{
    res.render('credit.ejs')
}

function getpayment (req, res)
{
    res.render('payment.ejs')
}

function getJewelry(req, res)
{
    const jewelryId =  req.query.id
    //if (!jewelry) return res.status(404).send('Jewelry not found');
    const jewelry = jewelriesModel.getJewelry(jewelryId) //passing the idparameter to the function 
    if(jewelry == undefinded)
        res.status(404).send("jewelry not found")
    else
       res.render('jewelry.ejs',{ jewelry })
}

function  deleteJewelry(req, res){
    const jewelryId= req.query.id
    jewelriesModel.deleteJewelry(jewelryId)
    //getAlljewelries(req, res)
    res.redirect("/")
}

// making the function public
module.exports = 
{
    getLogin,
    getRegister,
    getAlljewelries,
    getJewelry,
    getpayment,
    getCredit,
    deleteJewelry
}