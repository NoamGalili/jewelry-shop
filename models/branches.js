const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const Branches = new Schema({

    BranchId:{ type: Number, required: true, unique: true },
    BranchName:{ type: String, required: true },
    BranchCoordinates:{ type: String, required: true },
    BranchAddress:{ type: String, required: true },
    BranchOpeningHours:{ type: String, required: true },
    BranchManager:{ type: String, required: true },
    BranchManagerPhoto:{ type: String, required: true }
      
})

module.exports = mongoose.model('branches',Branches)