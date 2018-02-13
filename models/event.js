const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  venue: String,
  description: String,
  venue: { type: Schema.Types.ObjectId, ref: "Venue" },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  genre: { type: String, enum: ["Rave", "Smooth", "Mosh", "Nod", "Groove"] }
});

module.exports = mongoose.model("Event", eventSchema);
