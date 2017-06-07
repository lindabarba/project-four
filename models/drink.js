var mongoose = require('mongoose');

var drinkSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  barID: Number,
  custID: Number,
  drinkID: Number
});

module.exports = mongoose.model('Drink', drinkSchema);
