var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database');

var app = express();

app.use(logger('dev'));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use('/api/users', require('./routes/api/users'));
// LATER FOR AUTH?
// app.use(require('./config/auth'));
// NOT NECESSARY?
// app.use(bodyParser.urlencoded({extended: false}));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`server.js > app.listen > Express on port ${port}`)
});
