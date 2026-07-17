const dotenv = require("dotenv");
dotenv.config();
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const Medication = require("./src/models/Medication");

const USERNAME = process.env.adminUSERNAME;
const PASSWORD = process.env.adminPASSWORD;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.babtgvb.mongodb.net/?appName=Cluster0`;

const data = {
  id: "med378",
  name: "Aspirin",
  dosage: "325 mg",
  instructions: "Take 1 tablet every 4 hours.",
  inventory: {
    remaining: 100,
    Total: 200,
  },
  schedule: {
    intervalHours: 12,
    startDateTime: new Date("2023-10-01T00:00:00Z"),
    activeDays: ["Monday", "Tuesday", "Wednesday"],
    reminders: null,
  },
  notificationConfig: {
    isCritical: false,
    snoozeIntervalMinutes: 20,
  },
  icon: "pill",
};

mongoose
  .connect(uri)
  .then(async () => {
    console.log("MongoDB connected successfully");

    const med = await Medication.create(data);
    console.log("Created Document " + med);
    const medDel = await Medication.findOneAndDelete({ id: data.id });
    console.log("Deleted Document " + medDel);

    const doc = await Medication.findOne({ id: "med1234" });
    console.log("Found Document " + doc);

    const upd = await Medication.findOneAndUpdate(
      { id: "med127" },
      {
        instructions: "Take 2 tablet every 4 hours.",
        inventory: {
          remaining: 10,
          Total: 25,
        },
      },
      { returnDocument: "after" },
    );
    console.log("Updated Data", upd);

    const deletedCount = await Medication.deleteMany({
      id: /^med1\d+$/, // Matches any id starting with "med1"
    });

    console.log(`Deleted ${deletedCount} documents`);
  })

  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
