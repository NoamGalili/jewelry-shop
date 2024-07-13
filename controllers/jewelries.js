const jewelriesModel = require('../models/jewelries')

function getAlljewelries(req, res)
{
    const jewelries = jewelriesModel.getAllJewelries()
    res.render('jewelries.ejs',{ jewelries })
}

function getJewelry(req, res)
{
    const jewelryId =  req.query.id
    const jewelry = jewelriesModel.getJewelry(jewelryId) //passing the idparameter to the function 
    res.render('jewelry.ejs',{ jewelry })
}

// making the function public
module.exports = 
{
    getAlljewelries,
    getJewelry
}