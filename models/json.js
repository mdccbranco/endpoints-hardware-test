// models/project-model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jsonDataSchema = new Schema(
  {
    json: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

const JsonData = mongoose.model("json", jsonDataSchema);

module.exports = JsonData;
