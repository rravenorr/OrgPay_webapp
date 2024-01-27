const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  Username: String,
  Email: String,
  Password: String,
  Phrase: String,
  Balance: Number,
});
const UsersModel = new mongoose.model("users", UsersSchema);

module.exports = UsersModel;
