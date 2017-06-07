var mongoose = require('mongoose');
var Drink = require('Drink', drinkSchema);

var messageSchema = new mongoose.Schema({
  text: { type: String, default: "Cheers!" },
  // createdBy: userID
  // patronFrom: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  drink: [{type: mongoose.Schema.Types.ObjectId, ref: 'Drink'}],
});

module.exports = mongoose.model('Message', messageSchema);
