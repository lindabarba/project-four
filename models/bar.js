var mongoose = require('mongoose');
var Drink = require('Drink', drinkSchema);

var drinkMenu = new mongoose.Schema({
  drinks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Drink'}]
});

var barSchema = new mongoose.Schema({
  name: String,
  address: String,
  drinkMenu: [drinkMenuSchema]
});

module.exports = mongoose.model('Bar', barSchema);
