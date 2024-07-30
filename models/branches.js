const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectDB = require('../db'); // Adjust the path as needed
connectDB();


const Branches = new Schema({

    _id:{},
    BranchId:{ type: Number, required: true, unique: true },
    BranchName:{ type: String, required: true },
    BranchCoordinates:{ type: String, required: true },
    BranchAddress:{ type: String, required: true },
    BranchOpeningHours:{ type: String, required: true },
    BranchManager:{ type: String, required: true },
    BranchManagerPhoto:{ type: String, required: true }
      
})

module.exports = mongoose.model('Branches',Branches)