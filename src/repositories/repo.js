const Medication = require("../models/Medication");

async function createMedication(data) {
  return Medication.create(data);
}

async function getAllMedication() {
  return Medication.find({});
}

async function getMedication(id) {
  return Medication.findOne({ id });
}

async function updateMedication(id, update) {
  return Medication.findOneAndUpdate({ id }, update, { new: true });
}

async function deleteMedication(id) {
  return Medication.findOneAndDelete({ id });
}

async function deleteAllMedication() {
  return Medication.deleteMany({});
}

async function deleteManyMedications(ids) {
  return Medication.deleteMany({ id: { $in: ids } });
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
