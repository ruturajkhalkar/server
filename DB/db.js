const mongoose = require('mongoose');

// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL = `mongodb+srv://ruturajkhalkar:Test1234@cluster0.eg8ae.mongodb.net/food-app?retryWrites=true&w=majority`;



// Using CommonJS module exports
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`DB connected: ${mongoose.connection.host}`);
  } catch (err) {
    console.log('DB Error:', err);
  }
};

// Export using module.exports
module.exports = connectDB;