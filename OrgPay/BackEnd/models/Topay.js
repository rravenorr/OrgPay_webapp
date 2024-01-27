const mongoose = require("mongoose");
const ToPaySchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Amount: Number,
});
const ToPayModel = new mongoose.model("topay", ToPaySchema);
module.exports = ToPayModel;
