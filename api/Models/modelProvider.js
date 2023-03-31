const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelProvider = new Schema({
  company: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const provider = mongoose.model("Provider", modelProvider);
module.exports = provider;
