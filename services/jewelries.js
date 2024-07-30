const Jewelry = require('../models/jewelries'); //import

const getAllJewelries = async () => {
  try
  {
    const jewelries = await Jewelry.find({});
    return jewelries;
  } 
  catch (error) 
  {
    console.error('Error fetching jewelries:', error);
    throw error;
  }
};
/*
async function getAllJewelries() 
{
  
  return await Jewelry.find({}).exec();
}

const getJewelryByID = async (id) => 
{
  return await Jewelry.findById(id);
}
*/
const getJewelryByID = async (id) => {
  try 
  {
    const Jewelry = await Jewelry.findById(id);
    return Jewelry;
  } 
  catch 
  {
    console.error('Error fetching product by ID:', e);
  }
};


const deleteJewelry = async (id) => 
{
  return await Jewelry.findById(id);
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
      JewelryAddDate: (Date.now()).toString(),
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

const getJewelriesByType = async (type) =>
{
  return false;
}

module.exports = {
    getAllJewelries,
    getJewelryByID,
    deleteJewelry,
    createJewelry
}
