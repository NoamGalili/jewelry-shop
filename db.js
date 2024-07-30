const mongoose = require('mongoose');

const connectDB = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect('mongodb://0.0.0.0:27017/NTLC', {
    });
=======
    await mongoose.connect('mongodb://0.0.0.0:27017/NTLC', {});
>>>>>>> 3e819b91519fa49e951e9e6ea3ab1ed1f6f2ad83
    console.log('Connected to the database.');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
//export default {
  connectDB
//}
