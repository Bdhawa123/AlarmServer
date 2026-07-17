const express = require("express");
const controller = require("../controllers/medication.controller");

const router = express.Router();

// Create
router.post("/", controller.createMedication);

// Read all
router.get("/", controller.getAllMedication);

// Read one
router.get("/:id", controller.getMedication);

// Update
router.put("/:id", controller.updateMedication);

// Delete all
router.delete("/all", controller.deleteAllMedication);
// Delete one
router.delete("/:id", controller.deleteMedication);

// Delete many
router.delete("/", controller.deleteManyMedications);

module.exports = router;
