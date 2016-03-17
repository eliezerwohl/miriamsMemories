
var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var usern;
var firstname;
var lastname;
var patientId;
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
app.use(bodyParser.urlencoded({
  extended: false
}))

var session = require('express-session');
var PORT = process.env.PORT || 9000;
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var hbs = require('express-handlebars').create();
hbs.getPartials().then(function(partials) {
  console.log(partials);
});

var Sequelize = require('sequelize');
if (process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.JAWSDB_URL);

  var connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  // LOCAL DB
  var connection = new Sequelize('mmusersdb', 'root');
}

var User = connection.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  username: Sequelize.STRING
});

var Patient = connection.define('Patient', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
});

var Question = connection.define('Question', {
  question: Sequelize.STRING,
  answer: Sequelize.STRING
});

User.hasMany(Patient);
Patient.hasMany(Question);
Patient.belongsTo(User);
Question.belongsTo(Patient);

app.use(express.static('public'));
app.use(require('express-session')({
  secret: "dexterslab",
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60 * 24 * 30)
  },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
  extended: false
}));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  done(null, {
    id: id,
    username: id
  })
});


passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: "password"
  },
  function(req, email, password, done) {
    User.findOne({
        where: {
          email: email
        }
      })
      .then(function(user) {
        if (user) {
          bcrypt.compare(password, user.dataValues.password, function(err, user) {
            if (user) {
              console.log(user);
              //if password is correct authenticate the user with cookie
              done(null, {
                id: email,
                username: email
              });
            } else {
              done(null, null);
            }
          });
        } else {
          done(null, null);
        }
      });
  }));

//bcrypt define
function saltyhash(pass) {
  var salt = bcrypt.genSaltSync(10);
  console.log(salt);
  var hash = bcrypt.hashSync(pass, salt);
  return hash;
}

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/?msg=no_authorization");
}

app.get('/', function(req, res) {
  res.render("index", {
    msg: req.query.msg,
    layout: "mainpage.handlebars"
  });
});

app.get('/register', function(req, res) {
  res.render("signUP", {
    msg: req.query.msg,
    layout: "mainpage.handlebars"
  });
});


app.get('/loggedin', isAuth, function(req, res) {
  usern = req.user.username;
  User.findAll({
    where: [{
      email: usern
    }]
  }).then(function(User) {
    firstname = User[0].dataValues.firstname;
    lastname = User[0].dataValues.lastname;
    res.render("loggedIn", {
      msg: req.query.msg,
      first: firstname,
      last: lastname,
      User: User
    })
  })
});

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/loggedin?msg=Login successful.',
    failureRedirect: '/?msg=Login unsuccessful, please check your email and password or if you haven\'t done so, please register.'
  }));

app.post('/register', function(req, res) {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(function(results) {
    if (results) {
      res.redirect("/register?msg=Your email is already registered, please login.");
    } else {
      User.create({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        password: saltyhash(req.body.password)
      }).then(function() {
        res.redirect("/?msg=Thanks for registering, please login.");
      });
    }
  })
});

app.get('/patientregister', isAuth, function(req, res) {
  console.log(firstname);
  User.findAll({
    where: [{
      email: usern
    }]
  }).then(function(User) {

    console.log(User)
    var id = User[0].dataValues.id;
    res.render("patientregister", {
      first: firstname,
      last: lastname,
      id: id
    })
  });
});

app.post('/patientregister', isAuth, function(req, res) {
  Patient.create({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    UserId: req.body.UserId
  }).then(function(data) {
    patientId = data.dataValues.id;
    res.redirect("patientquestion/1");
  })
})

app.get("/patientquestion/:question", isAuth, function(req, res) {
  var page = "question" + req.params.question;
  res.render(page, {
    patient: patientId
  });
})

app.post("/patientquestion/:question/", isAuth, function(req, res) {

  var nextPage = parseInt(req.params.question) + 1;
  Question.create({
    question: req.body.question,
    answer: req.body.answer,
    PatientId: patientId
  }).then(function(data) {
    res.redirect("/patientquestion/" + nextPage + "/");
  })
})

app.get("/test", function(req, res) {
  debugger
console.log(patientId)
})


connection.sync()
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
})