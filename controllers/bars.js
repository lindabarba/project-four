var Bar = require('../models/bar');


function getBar(req, res) {
  Bar.findById(req.params.id, function(err, bar) {
    if (err) return (console.error('error'));
    return res.json(bar);
  });
}

function createBar(req, res) {
  var bar = new Bar(req.body);
  bar.save(err => {
    res.redirect(`bars/${bar.id}`);
  });
}

function showBars(req, res) {
  // Bar.showAll();
  Bar.find({}, function(err, bar) {
    if (err) return (console.error('error'));
    return res.json(bar);
  })
}

// HARD CODE DATA?????

module.exports = {
  getBar,
  createBar,
  showBars
};
