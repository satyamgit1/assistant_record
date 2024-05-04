const Assistant = require('../models/assistant'); // Adjust the path based on your project structure

// Controller functions for CRUD operations

// Create a new assistant
const createAssistant = async (req, res) => {
  try {
    const assistant = new Assistant(req.body);
    await assistant.save();
    res.status(201).json(assistant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a specific assistant by ID
const deleteAssistantById = async (req, res) => {
  try {
    const assistant = await Assistant.findByIdAndDelete(req.params.id);
    if (!assistant) {
      return res.status(404).json({ message: 'Assistant not found' });
    }
    res.json({ message: 'Assistant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get details of all assistants
const getAllAssistants = async (req, res) => {
  try {
    const assistants = await Assistant.find();
    res.json(assistants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get details of a specific assistant by ID
const getAssistantById = async (req, res) => {
  try {
    const assistant = await Assistant.findById(req.params.id);
    if (!assistant) {
      return res.status(404).json({ message: 'Assistant not found' });
    }
    res.json(assistant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update details of a specific assistant by ID
const updateAssistantById = async (req, res) => {
  try {
    const assistant = await Assistant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!assistant) {
      return res.status(404).json({ message: 'Assistant not found' });
    }
    res.json(assistant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Export all controller functions
module.exports = {
  createAssistant,
  deleteAssistantById,
  getAllAssistants,
  getAssistantById,
  updateAssistantById,
};
