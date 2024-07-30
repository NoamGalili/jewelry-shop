const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectDB = require('../db'); // Adjust the path as needed
connectDB();


const Orders = new Schema({

    _id:{},
    OrderID:{ type: Number, required: true, unique: true },
    CustomerID:{ type: String, required: true},
    OrderAddress:{ type: String, required: true}
})


module.exports = mongoose.model('Orders',Orders)