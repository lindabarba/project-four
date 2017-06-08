var express = require('express');
var router = express.Router();
var Drink = require('../../models/drink');
var drinksCtrl = require('../../controllers/drinks');
var Bar = require('../../models/bar');
var barsCtrl = require('../../controllers/bars');

/*---------- Public Routes ----------*/
router.get('/', drinksCtrl.showDrinks);
// router.get('/bars', drinksCtrl.showBars);



/*---------- Protected Routes ----------*/
// router.post('/buydrink', checkAuth, drinkCtrl.createDrink);
// router.get('/mydrinks', checkAuth, drinkCtrl.getDrink);
// router.get('/mybar', checkAuth, barCtrl.getBar);



/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}


module.exports = router;
