var Drink = require('../models/drink');

function getDrink(req, res) {
  Drink.findById(req.params.id, function(err, drink) {
    if (err) return (console.error('error'));
    return res.json(drink);
  });
}

function createDrink(req, res) {
  var drink = new Drink(req.body);
  drink.save(err => {
    res.redirect(`drinks/${drink.id}`);
  });
}

function showDrinks(req, res) {
  // Drink.showAll();
  Drink.find({}, function(err, drinks) {
    if (err) return (console.error('error'));
    return res.json(drinks);
  })
}

// HARD CODE DATA??

module.exports = {
  getDrink,
  createDrink,
  showDrinks
};
