const User = require ('../models/users')

const createUser = async (jewelryData) => 
    {
      try 
      {
        const newUser = new Jewelry(
        {
            UserID: jewelryData.JewelryID,
            UserType: jewelryData.JewelryType,
            UserColor: jewelryData.JewelryColor,
            UserName: jewelryData.JewelryName,
            UserPhoto: jewelryData.JewelryPhoto,
            UserPrice: jewelryData.JewelryPrice,
            UserDescription: jewelryData.JewelryDescription,
            UserAddDate: jewelryData.JewelryAddDate || Date.now(),
            UserAvaliableStock: jewelryData.JewelryAvaliableStock,
            UserAmountOfOrders: 0
        });
    
        await newUser.save();
        return newUser;
      }
      
      catch (error) 
      {
        console.error('Error creating user:', error);
        throw error;
      }
    }

module.exports = 
{
    createUser
}
