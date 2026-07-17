require("dotenv").config();

const connectDB = require("./src/config/database");
const app = require("./src/app");

async function start() {
  await connectDB();

  app.listen(3000, () => {
    console.log("Server running");
  });
}

start();
