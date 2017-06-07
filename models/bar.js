var mongoose = require('mongoose');

var drinkMenu = new mongoose.Schema({
  name: String,
  type: String,
  cost: Number,
  drinkID: Number
});

var barSchema = new mongoose.Schema({
  name: String,
  address: String,
  barID: Number,
  drinkMenu: [drinkMenuSchema]
});

module.exports = mongoose.model('Bar', barSchema);
