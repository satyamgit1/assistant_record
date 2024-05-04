const mongoose = require("mongoose");

// Define the schema
const assistantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures each email is unique
    },
    salary: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

// Define the model
const Assistant = mongoose.model("Assistant", assistantSchema);

module.exports = Assistant;
