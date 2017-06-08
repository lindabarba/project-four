var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drinkSchema = new Schema({
  name: String,
  cost: Number,
  redeemed: {type: Boolean, default: false},
  bar: {type: Schema.Types.ObjectId, ref: 'Bar'},
  patronTo: {type: Schema.Types.ObjectId, ref: 'User'},
  message: {type: String, default: 'Cheers!'},
  from: String
});

// need to duplicate for REDEEM
drinkSchema.post('remove', function(doc) {
  this.model('Bar').find(
    {drinks: doc._id},
    function(err, bars) {
      bars.forEach(function(bar) {
        bar.drink.remove(doc._id);
        bar.save();
      });
    }
  );
});

/*---- Helper Functions ----*/
function create(req, res) {
  var drink = new Drink(req.body);
  drink.save(err => {
    res.redirect(`drinks/${drink.id}`);
  });
}



module.exports = mongoose.model('Drink', drinkSchema);
