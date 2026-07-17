const express = require("express");

const app = express();

app.use(express.json());

app.use("/medications", require("./routes/medication.routes"));

module.exports = app;
