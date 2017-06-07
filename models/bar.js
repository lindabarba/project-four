var mongoose = require('mongoose');

var drinkItemSchema = new mongoose.Schema({
  name: String,
  cost: Number
});

var barSchema = new mongoose.Schema({
  name: String,
  address: String,
  drinkMenu: [drinkItemSchema]
});

module.exports = mongoose.model('Bar', barSchema);
