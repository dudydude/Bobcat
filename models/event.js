const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventTime: Date,
  venue: String,
  // venue: { type: Schema.Types.ObjectId, ref: "Venue" },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  description: String,
  genre: { type: String, enum: ["Rave", "Smooth", "Mosh", "Nod", "Groove"] }
});

module.exports = mongoose.model("Event", eventSchema);
