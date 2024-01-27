const mongoose = require("mongoose");
const transSchema = new mongoose.Schema({
  Title: String,
  SenderEmail: String,
  RecieverEmail: String,
  Amount: Number,
  Date: { type: Date, default: Date.now },
});
const transModel = new mongoose.model("ItemTrans", transSchema);
module.exports = transModel;
