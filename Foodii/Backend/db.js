const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const mongoURI = process.env.MONGODB_URI; // Use .env variable

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = mongoDB;
