const jewelriesModel = require('../models/jewelries')

function getAlljewelries(req, res)
{
    const jewelries = jewelriesModel.getAllJewelries()
    res.render('jewelries.ejs',{ jewelries })
}

function getLogin(req, res)
{
    res.render('login.ejs')
}

function getJewelry(req, res)
{
    const jewelryId =  req.query.id
    //if (!jewelry) return res.status(404).send('Jewelry not found');
    const jewelry = jewelriesModel.getJewelry(jewelryId) //passing the idparameter to the function 
    res.render('jewelry.ejs',{ jewelry })
}

// making the function public
module.exports = 
{
    getLogin,
    getAlljewelries,
    getJewelry
}