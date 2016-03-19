
var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars'); 
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

var BulkQuestion = connection.define("BulkQuestion", {
question:Sequelize.STRING
});

var Note = connection.define("Note", {
  note:Sequelize.STRING,
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
Question.hasMany(Note);
Note.belongsTo(Question);
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

// register user
app.get('/register', function(req, res) {
  res.render("signUP", {
    msg: req.query.msg,
    layout: "mainpage.handlebars"
  });
});


app.get('/loggedin', isAuth, function(req, res) {
  User.findAll({
    where: [{
      email: req.user.username
    }]
  }).then(function(User) {
    req.session.firstname = User[0].dataValues.firstname;
    req.session.lastname = User[0].dataValues.lastname;
    req.session.UserId= User[0].dataValues.id
    res.render("loggedIn", {
      msg: req.query.msg,
      first: req.session.firstname,
      last: req.session.lastname,
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
  User.findAll({
    where: [{
      email: req.user.username
    }]
  }).then(function(User) {
    console.log(User)
    res.render("patientregister", {
      first: req.body.firstname,
      last: req.body.lastname,
      id: req.session.UserId
    })
  });
});

app.post('/patientregister', isAuth, function(req, res) {
  Patient.create({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    UserId: req.session.UserId
  }).then(function(data) {
    req.session.patientId = data.dataValues.id;
    res.redirect("patientquestion/1");
  })
})

app.get("/patientquestion/:number", isAuth, function(req, res) {
  var number= req.params.number;
  BulkQuestion.findAndCountAll().then(function(result){
    //automatically send the user to the create a question page after all the premade
    //questions have been answered
    if (number > result.count){
      res.redirect("/patientQuestionComplete")
    }
    else{
       BulkQuestion.findAll({
        where: [{
        id: number
        }]
      }).then(function(question) {
        res.render("questionPage", {number:number, question:question[0].dataValues.question})
      });
    }
  })
});
app.post("/patientquestion/:question/", isAuth, function(req, res) {
  var nextPage = parseInt(req.params.question) + 1;
  Question.create({
    question: req.body.question,
    answer: req.body.answer,
    PatientId: req.session.patientId
  }).then(function(data) {
    res.redirect("/patientquestion/" + nextPage + "/");
  })
})

app.get("/patientQuestionComplete", function(req, res){
  res.render("patientQuestionComplete")
});

app.get("/questionCreate", function(req, res){
  res.render("questionCreate")
  // res.send("herrro")
});

app.post("/questionCreate", function(req, res){
  Question.create({
    question: req.body.question,
    answer: req.body.answer,
    PatientId: req.session.patientId 
  }).then(function(data) {
  res.redirect("/patientQuestionComplete")
  })
});

app.get("/showAll", function(req, res){
  User.findAll({
    where: [{
      email: req.user.username
    }]
  }).then(function(User) {
    Patient.findAll({
      where:[{
        UserId:req.session.UserId
      }]
    }).then(function(results){
      res.render("showAll", {results:results})
    });
   })
});

app.get("/view/:patientId", function(req, res){
req.session.patientId = req.params.patientId;

console.log(req.session.patientId)
Patient.findAll({
    where: [{
      // using both userid and id to prevent user from rendering a patient that doesn't belong to them
      UserId: req.session.UserId,
      id:req.session.patientId
    }]
  }).then(function(results) {
    res.render("patientInfo", {results:results})
  })
});

app.get("/patientQa", function(req, res){
Question.findAll({
    where: [{
      PatientId: req.session.patientId,
    }]
  }).then(function(results) {
    console.log(results)
    res.render("qa", {results:results})
  })
});

app.get("/viewNote/:questionId", function (req, res) {
  req.session.questionId = req.params.questionId;
  Question.findAll({
    include: [
      {model: Note}
      ],
    where: [{
      PatientId: req.session.patientId,
      // using the id so that user can't access a question not linked to thier user
      id:req.session.questionId
    }]
  }).then(function(results){
    debugger
    console.log(results)
    res.render("questionInfo", {results:results})
    })
})

app.post("/createNote", function (req, res){
  Note.create({
    QuestionId: req.session.questionId,
    note: req.body.note
  }).then(function(data) {
    res.redirect("back")
  });
});



connection.sync()
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
})