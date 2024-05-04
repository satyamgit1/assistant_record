require('dotenv').config(); // Load environment variables from .env file

const mongoose = require("mongoose");

async function connectMongoDb() {
    const url = process.env.MONGODB_URI; // Retrieve MongoDB URI from environment variables
    try {
        // Connect to MongoDB
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error; // Rethrow the error to handle it in the caller
    }
}

module.exports = {
    connectMongoDb,
};
