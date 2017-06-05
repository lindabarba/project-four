const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

mongoose.Promise = Promise;
// NOT SURE IF WE NEED THIS LINE YET/EVER?
// mongoose.Promise = gloabl.Promise;

const db = mongoose.connection;

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:{db.port}`);
});

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
});
