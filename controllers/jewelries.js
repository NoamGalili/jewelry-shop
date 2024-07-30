const jewelriesService = require('../services/jewelries')

function getAlljewelries(req, res)
{
    const jewelries = jewelriesService.getAllJewelries()
    res.render('home.ejs',{ jewelries })
}

function getJewelryByID(req, res)
{
    const jewelryId =  req.query.id

    const jewelry = jewelriesService.getJewelryByID(jewelryId) //passing the id parameter to the function 

    if(jewelry == undefined)
    {
        res.status(404).send("jewelry not found") //check how to create a custume 404 page...
    }
    else
    {
        res.render('jewelry.ejs',{ jewelry })
    }
}

function deleteJewelry(req, res)
{
    const jewelryId = req.query.id
    jewelriesService.deleteJewelry(jewelryId)
    res.redirect("/")
}

function addJewelry(req, res)
{
    res.render('addjewelry.ejs')
}

const searchJewelry = async (req, res)=> {
    const jewlery= await jewelriesService.getJewelriesByType(req.params.type)
    res.json(jewlery)
}

module.exports = 
{
    getAlljewelries,
    getJewelryByID,
    deleteJewelry,
    addJewelry,
    searchJewelry
    
}