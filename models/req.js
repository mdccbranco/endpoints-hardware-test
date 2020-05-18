const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReqDataSchema = new Schema(
  {
    files: {
      type: String,
    },
    config: {
      type: String,
    },
  },
  {
    timestamps: true
  }
);

const ReqData = mongoose.model("req", ReqDataSchema);

module.exports = ReqData;
