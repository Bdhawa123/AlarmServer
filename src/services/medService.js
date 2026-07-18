const repository = require("../repositories/repo.js");

async function createMedication(data) {
  // validation
  if (!data.name) {
    throw new Error("Medication name required");
  }

  return repository.createMedication(data);
}
async function getAllMedication() {
  return repository.getAllMedication();
}

async function getMedication(id) {
  return repository.getMedication(id);
}

async function updateMedication(id, update) {
  return repository.updateMedication(id, update);
}

async function deleteMedication(id) {
  return repository.deleteMedication(id);
}

async function deleteAllMedication() {
  return repository.deleteAllMedication();
}

async function deleteManyMedications(ids) {
  return repository.deleteManyMedications(ids);
}

module.exports = {
  getAllMedication,
  getMedication,
  createMedication,
  getMedication,
  updateMedication,
  deleteMedication,
  deleteAllMedication,
  deleteManyMedications,
};
