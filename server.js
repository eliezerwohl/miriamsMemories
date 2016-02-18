var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('rcb_authentication_db', 'root');
var PORT = 3000;

app.use(express.static(__dirname + '/public'));


app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var hbs = require('express-handlebars').create();
 
hbs.getPartials().then(function (partials) {
    console.log(partials);
    });

var routes = require('./controllers/mmController.js');
app.use('/', routes);
app.use('/signUp', routes);
app.use('/create/signUp', routes);
app.use('/update', routes);
app.use('/delete', routes);

// sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  })
// });
