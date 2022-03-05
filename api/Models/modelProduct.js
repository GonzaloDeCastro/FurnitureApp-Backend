const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  }
});

const product = mongoose.model('Product', Product);
module.exports = product;
