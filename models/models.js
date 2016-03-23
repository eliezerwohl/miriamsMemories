var Sequelize = require('sequelize');
if (process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.JAWSDB_URL);

  var connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  // LOCAL DB
  var connection = new Sequelize('mmdb', 'root');
}

var BulkQuestion = connection.define("BulkQuestion", {
question:Sequelize.STRING
});


var Note = connection.define("Note", {
  note:Sequelize.STRING,
  firstname:Sequelize.STRING,
  lastname:Sequelize.STRING
});

var Patient = connection.define('Patient', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  dob:Sequelize.STRING,
  phonenumber:Sequelize.STRING,
  email:Sequelize.STRING
});


var PatientComment = connection.define('Question', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  comment:Sequelize.STRING
});

var Question = connection.define('Question', {
  question: Sequelize.STRING,
  answer: Sequelize.STRING
});


var User = connection.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  phone:Sequelize.STRING

});
Patient.hasMany(PatientComment);
PatientComment.belongsTo(Patient)
User.hasMany(Patient);
Patient.hasMany(Question);
Question.hasMany(Note);
Note.belongsTo(Question);
Patient.belongsTo(User);
Question.belongsTo(Patient);
connection.sync();
exports.User=User;
exports.Question=Question;
exports.PatientComment=PatientComment;
exports.Note=Note;
exports.Patient=Patient;
exports.BulkQuestion=BulkQuestion;
