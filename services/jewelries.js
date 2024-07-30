const Jewelry = require ('../models/jewelries')

async function getAllJewelries() //allowing the rest of the project to access the jewleries json 
{   
    return await Jewelry.find({});
}

const getJewelryByID = async (id) =>
{
    return await Jewelry.findById(id);
}
const deleteJewelry = async (id) =>
{
    return await Jewelry.findById(id);
}

module.exports = 
{
  getAllJewelries,
  getJewelryByID,
  deleteJewelry
}
