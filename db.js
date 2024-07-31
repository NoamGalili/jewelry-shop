const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://192.168.50.50:27017/NTLC', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the database.');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
