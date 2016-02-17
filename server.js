var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('rcb_authentication_db', 'root');
var PORT = 3000;





// sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  })
// });