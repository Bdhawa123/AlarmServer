class MedicationService {
  async create(data) {
    try {
      const med = await Medication.create(data);
      console.log("Created Document " + med);
      return med;
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(id) {
    try {
      const delCount = await this.deleteMany({ id });
      if (delCount > 0) {
        console.log(`Deleted ${delCount} documents`);
      } else {
        console.error("No document found with the given id");
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteMany(pattern) {
    try {
      const deletedCount = await this.deleteMany({ [pattern]: true });
      return `Deleted ${deletedCount} documents`;
    } catch (error) {
      throw error;
    }
  }

  async findOneAndUpdate(id, data, options) {
    try {
      if (!id || !data) {
        console.error("Invalid id or data provided");
        return null;
      }
      await this.deleteOne(id);
      const upd = await Medication.create(data);
      console.log("Updated Data", upd);
      return upd;
    } catch (error) {
      throw error;
    }
  }

  async findDocument(id) {
    try {
      const doc = await Medication.findOne({ id });
      if (!doc) {
        console.error(`No document found with the given id: ${id}`);
      } else {
        console.log("Found Document " + doc);
      }
      return doc;
    } catch (error) {
      throw error;
    }
  }

  async deleteManyByIdPattern(pattern) {
    try {
      const deletedCount = await this.deleteMany({ [pattern]: true });
      return `Deleted ${deletedCount} documents`;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MedicationService;
