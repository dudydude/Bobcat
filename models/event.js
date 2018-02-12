const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventTime: Date,
  venue: String,
  creator: String,
  description: String,
  genre: { type: String, enum: ["Rave", "Smooth", "Mosh", "Nod", "Groove"] }
});

module.exports = mongoose.model("Event", eventSchema);
