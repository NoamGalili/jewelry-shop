const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
const connectDB = require('../db'); // Adjust the path as needed
connectDB();
*/

const Jewelries = new Schema({

      JewelryID:{ type: String, required: true, unique: true },
      JewelryType:{ type: String, required: true },
      JewelryColor:{ type: String, required: true },
      JewelryName:{ type: String, required: true },
      JewelryPhoto:{ type: String, required: true },
      JewelryPrice:{ type: Number, required: true },
      JewelryDescription:{ type: String, required: true },
      JewelryAddDate:{ type: Date, required: true, default: Date.now },
      JewelryAvaliableStock:{ type: Number, required: true },
      JewelryAmountOfOrders:{ type: Number, required: true, default: 0 },
      
})

module.exports = mongoose.model('jewelries',Jewelries)

