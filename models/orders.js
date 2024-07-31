const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Orders = new Schema({

    OrderID:{ type: Number, required: true, unique: true },
    CustomerID:{ type: String, required: true},
    OrderAddress:{ type: String, required: true}
})


module.exports = mongoose.model('orders',Orders)