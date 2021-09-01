const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
});

const Product = ("Product", ProductSchema);

module.exports = Product;
