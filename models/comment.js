const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  createBy: { type: Schema.Types.ObjectId, ref: "User" },
  createAt: Date,
  eventAttending: Array
});

module.exports = mongoose.model("Comment", commentSchema);
