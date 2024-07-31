 const mongoose = require('mongoose');

 const connectDB = async () => {
     try {
    await mongoose.connect('mongodb://127.0.0.1:27017/NTLC', {
   
    });
    console.log('Connected to the database.');
   } catch (err) {
   console.error('Database connection error:', err);
     process.exit(1);
   }
 };

 module.exports = connectDB;
