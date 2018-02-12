const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  loc: {
    type: [Number], // [<longitude>, <latitude>]
    index: "2d" // create the geospatial index
  },
  description: String,
  address: String,
  name: String
});

module.exports = mongoose.model("Venue", venueSchema);
