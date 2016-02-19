var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

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

var Sequelize = require('sequelize');
// var sequelize = new Sequelize('MMUsersDB', 'root');

// var User = sequelize.define('User', {
//   email: {
//     type: Sequelize.STRING,
//     unique: true
//   },
//   password: Sequelize.STRING,
//   firstname: Sequelize.STRING,
//   lastname: Sequelize.STRING
// }); 


var routes = require('./controllers/mmController.js');
app.use('/', routes);
app.use('/signUp', routes);
app.use('/register', routes);
app.use('/loggedIn', routes);
app.use('/login', routes);

sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  })
});
