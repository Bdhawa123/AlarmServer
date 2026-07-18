const service = require("../services/medService");

async function createMedication(req, res) {
  try {
    const medication = await service.createMedication(req.body);
    res.status(201).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getMedication(req, res) {
  try {
    const medication = await service.getMedication(req.params.id);
    res.status(200).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getAllMedication(req, res) {
  try {
    const medication = await service.getAllMedication();
    res.status(200).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updateMedication(req, res) {
  try {
    const medication = await service.updateMedication(req.params.id, req.body);
    res.status(200).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteAllMedication(req, res) {
  try {
    const medication = await service.deleteAllMedication();
    res.status(200).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteMedication(req, res) {
  try {
    const medication = await service.deleteMedication(req.params.id);
    res.status(200).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteManyMedications(req, res) {
  try {
    const medication = await service.deleteManyMedications(req.body.ids);
    res.status(200).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  createMedication,
  getMedication,
  getAllMedication,
  updateMedication,
  deleteMedication,
  deleteAllMedication,
  deleteManyMedications,
};
