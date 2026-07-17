const mongoose = require("mongoose");
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const USERNAME = process.env.adminUSERNAME;
const PASSWORD = process.env.adminPASSWORD;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.babtgvb.mongodb.net/?appName=Cluster0`;

async function connectDB() {
  await mongoose.connect(uri);
  console.log("MongoDB Connected");
}

module.exports = connectDB;
