const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: String,
  loc: {
    lng: Number,
    lat: Number
  },
  // description: String,
  address: String
});

module.exports = mongoose.model("Venue", venueSchema);
