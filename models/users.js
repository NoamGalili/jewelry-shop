const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectDB = require('../db'); // Adjust the path as needed
connectDB();
/*
function generateRandomSalt() 
{
    return Math.random().toString(36).substr(2, 6);
}
*/
const Users = new Schema({

    UserID:{ type: String, required: true, unique: true },
    UserType:{ type: String, required: true, default: 'User' },
    Username:{ type: String, required: true, unique: true},
    UserMail:{ type: String, unique: true },
    UserPasswordSHA256Hash:{ type: String, required: true },
    UserSalt:{ type: String, required: true }
      
})
/*
userSchema.pre('save', function(next) 
{
    this.UserSalt = generateRandomSalt(); // Always generate a new random string of length 6
    next();
});
*/
module.exports = mongoose.model('Users',Users)