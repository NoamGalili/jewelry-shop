const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectDB = require('../db'); // Adjust the path as needed
connectDB();


const Users = new Schema({

    UserID:{ type: String, required: true, unique: true },
    UserType:{ type: String, required: true, default: 'User' },
    Username:{ type: String, required: true, unique: true},
    UserMail:{ type: String, unique: true },
    UserPasswordSHA256Hash:{ type: String, required: true },
    UserSalt:{ type: String, required: true }
      
})

module.exports = mongoose.model('Users',Users)