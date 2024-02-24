const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  pname: String,
  pprice: Number,
  pimages: String,
  pcategory: String,
  psubcategory: String,
  ptitle: String,
  pdescription: String,
  porigin: String
});
const PRODUCTS = mongoose.model("PRODUCTS", schema);
