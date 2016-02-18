var express = require('express');
var router = express.Router();


router.get('/', function(req,res) {

  res.render("index");
});

router.get('/signUp', function(req,res) {
  res.render("signUP");
});

router.post('/create/signUp', function(req,res) {
  res.redirect("/");
});


module.exports = router;