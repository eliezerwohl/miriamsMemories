var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var usern;
//passport
var passport = require('passport');
var session = require('express-session');
//bcrypt
var bcrypt = require("bcryptjs");

//bodyParser
require("dotenv").config();
var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

var session = require('express-session');
var PORT = process.env.PORT || 9000;

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
var connection = new Sequelize('MMUsersDB', 'root');

var User = connection.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
}); 


app.get('/', function(req,res) {

  res.render("index");
});

app.get('/signUp', function(req,res) {
  res.render("signUP");
});

app.get('/loggedIn', function(req,res) {
  res.render("loggedIn");
});

app.post('/logIn', function(req,res) {
var checkUser = function(username, password){
  User.findOne({
    where: {
      email: username,
      password:password 
    }
  }).then(function(results){
    if(results){
        console.log("Successfully logged in!");
        res.redirect("/loggedIn")
      } else {
        console.log("Your login credentials do not work");
        res.redirect("/")
      }
   }); 
}

var email= req.body.email ;
var password = req.body.password;
  checkUser(email, password)
});
app.post('/register', function(req,res) {
  console.log(req.body.email)
    User.create({
            email: req.body.email,
            password: req.body.password,
            firstname:req.body.firstname,
            lastname:req.body.lastname
          }).then(function() {
            console.log("SAVED!");
          });

  res.redirect("/");
});
connection.sync()
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  })