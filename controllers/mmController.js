var express = require('express');
var app = express();
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('MMUsersDB', 'root');

var User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
}); 


// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))




router.get('/', function(req,res) {

  res.render("index");
});

router.get('/signUp', function(req,res) {
  res.render("signUP");
});

router.get('/loggedIn', function(req,res) {
  res.render("loggedIn");
});

router.post('/logIn', function(req,res) {
  res.redirect("loggedIn");
});
router.post('/register', function(req,res) {
  console.log(req.body.email)
    User.create({
            username: req.body.email,
            password: req.body.password
          }).then(function() {
            console.log("SAVED!");
          });

  res.redirect("/");
});


module.exports = router;