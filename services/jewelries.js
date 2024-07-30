const Jewelry = require('../models/jewelries');

async function getAllJewelries() 
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

const getJewelriesByType= async (type) => 
    {
      return await Jewelry.findByType(type);
    }

const createJewelry = async (jewelryData) => 
{
  try 
  {
    const newJewelry = new Jewelry(
    {
      JewelryID: jewelryData.JewelryID,
      JewelryType: jewelryData.JewelryType,
      JewelryColor: jewelryData.JewelryColor,
      JewelryName: jewelryData.JewelryName,
      JewelryPhoto: jewelryData.JewelryPhoto,
      JewelryPrice: jewelryData.JewelryPrice,
      JewelryDescription: jewelryData.JewelryDescription,
      JewelryAddDate: jewelryData.JewelryAddDate || Date.now(),
      JewelryAvaliableStock: jewelryData.JewelryAvaliableStock,
      JewelryAmountOfOrders: 0
    });

    await newJewelry.save();
    return newJewelry;
  }
  
  catch (error) 
  {
    console.error('Error creating jewelry:', error);
    throw error;
  }
}

module.exports = {
    getAllJewelries,
    getJewelryByID,
    deleteJewelry,
    createJewelry,
    getJewelriesByType
}
