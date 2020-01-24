// models/project-model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorDataSchema = new Schema(
  {
    rawData: String,
  },
  {
    timestamps: true
  }
);

const SensorData = mongoose.model("sensorData", sensorDataSchema);

module.exports = SensorData;
