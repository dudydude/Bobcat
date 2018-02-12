const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  date: Date,
  venue: String,
  //{ type: Schema.Types.ObjectId, ref: "Venue" },
  description: String,
  genre: { type: String, enum: ["Rave", "Smooth", "Mosh", "Nod", "Groove"] },
  creator: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Event", eventSchema);
