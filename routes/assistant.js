const express = require('express');
const router = express.Router();
const { 
  createAssistant,
  getAssistantById,
  getAllAssistants,
  updateAssistantById,
  deleteAssistantById
} = require("../controllers/assistantController");

// Define routes
router.route("/")
  .get(getAllAssistants) // Route to fetch all assistants
  .post(createAssistant);

router.route("/:id")
  .get(getAssistantById)
  .put(updateAssistantById)
  .delete(deleteAssistantById);

module.exports = router;
