// Import required modules
const express = require("express");
const { connectMongoDb } = require("./connection");
const { jsonParser } = require("./middlewares"); // Import the JSON parsing middleware
const assistantRouter = require("./routes/assistant");

// Create an Express app
const app = express();
const PORT = process.env.PORT || 2000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Assistants";

// Connect to MongoDB
connectMongoDb(MONGODB_URI).then(() =>
  console.log("MongoDB connected!")
);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/assistants", assistantRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Assistant Management System!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
