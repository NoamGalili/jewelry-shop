const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
const connectDB = require('../db'); // Adjust the path as needed
connectDB();
*/

const Jewelries = new Schema({

      jewelryType: { type: String, required: true },
      jewelryColor: { type: String, required: true },
      jewelryName: { type: String, required: true },
      jewelryPhoto: { type: String, required: true },
      jewelryPrice: { type: String, required: true },
      jewelryDescription: { type: String, required: true },
      jewelryAddDate: { type: Date, required: true, default: Date.now },
      jewelryAvaliableStock: { type: String, required: true },
      jewelryAmountOfOrders: { type: String, required: true, default: 0 },

})

module.exports = mongoose.model('jewelries', Jewelries)

