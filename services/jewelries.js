const Jewelry = require('../models/jewelries'); //import


async function getAllJewelries() {
  try {
    const jewelries = await Jewelry.find({});
    console.log('Service: Fetched jewelries from DB:', jewelries);
    return jewelries;
  } catch (error) {
    console.error('Error fetching jewelries:', error);
    throw error;
  }
}

module.exports = {
  getAllJewelries
};


const getJewelryByID = async (id) => 
{
  return await Jewelry.findById(id);
}

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
const getAllNecklaces = async () => {
  try {
    return await Jewelry.find({ JewelryType: "Necklaces" });
  } catch (error) {
    console.error('Error fetching necklaces:', error);
    throw error;
  }
};

module.exports = {
    getAllJewelries,
    getJewelryByID,
    deleteJewelry,
    createJewelry,
    getAllNecklaces
}
