const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  card: String,
  cardDetails: Number,
  expiry: Date,
  cvc: Number,
  cartTotal: Number,
});

const CheckoutModel = mongoose.model("Orders", CheckoutSchema);
module.exports = CheckoutModel;
