var express = require('express');
var router = express.Router();


router.get('/', function(req,res) {
  res.send("you hit the main page!")
});

module.exports = router;