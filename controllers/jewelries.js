const jewelriesService = require('../services/jewelries');
const Jewelry = require('../models/jewelries');

async function getNewjewelries(req, res) {
    try {
        const jewelries = await jewelriesService.getAllJewelries();
        if (jewelries.length === 0) {
            console.log("No jewelries found in the database.");
        } else {
            console.log("Fetched jewelries: ", jewelries);
        }
        res.render('home.ejs', { jewelries });
    } catch (error) {
        console.error('Error fetching jewelries:', error);
        res.status(500).send('Internal Server Error');
    }
}

function getJewelryByID(req, res)
{
    const jewelryId =  req.query.id

    const jewelry = jewelriesService.getJewelryByID(jewelryId) //passing the id parameter to the function 

    if(jewelry == undefined)
    {
        res.status(404).render("404.ejs") //check how to create a custume 404 page...
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

const searchJewelry = async (req, res)=> 
{
    const jewlery = await jewelriesService.getJewelriesByType(req.params.type)
    res.json(jewlery)
}

const getAlljewelries = async (req, res) => {
    try {
        const jewelryType = req.query.type || 'All'; // Use the query parameter to determine the type
        const jewelries = await Jewelry.find({ type: jewelryType }); // Fetch jewelries from the database

        res.render('jewelries.ejs', {
            JewelryType: jewelryType,
            jewelries: jewelries
        });
    } catch (error) {
        console.error('Error fetching jewelries:', error);
        res.status(500).send('Server Error');
    }
};

//function getAlljewelries(req, res)
//{
  //  res.render('jewelries.ejs')
//}

const getAllNecklaces = async () => {
    try {
      return await Jewelry.find({ JewelryType: 'Necklaces' });
    } catch (error) {
      console.error('Error fetching necklaces:', error);
      throw error;
    }
  };

module.exports = 
{
    getAlljewelries,
    getNewjewelries,
    getJewelryByID,
    deleteJewelry,
    addJewelry,
    searchJewelry,
    getAllNecklaces

}