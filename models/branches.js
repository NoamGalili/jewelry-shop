const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD

=======
const connectDB = require('../db');
connectDB();
>>>>>>> 3e819b91519fa49e951e9e6ea3ab1ed1f6f2ad83


const Branches = new Schema({

    BranchId:{ type: Number, required: true, unique: true },
    BranchName:{ type: String, required: true },
    BranchCoordinates:{ type: String, required: true },
    BranchAddress:{ type: String, required: true },
    BranchOpeningHours:{ type: String, required: true },
    BranchManager:{ type: String, required: true },
    BranchManagerPhoto:{ type: String, required: true }
      
})

module.exports = mongoose.model('Branches',Branches)