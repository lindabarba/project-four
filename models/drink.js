var mongoose = require('mongoose');
var Bar = require('Bar', barSchema);
var User = require('User', userSchema);
var Message = require('Message', messageSchema);

var drinkSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  bar: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bar'}],
  patronTo: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  message: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}]
});

module.exports = mongoose.model('Drink', drinkSchema);
