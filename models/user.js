const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  mail: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  eventAttending: Array
});

module.exports = mongoose.model("User", userSchema);
