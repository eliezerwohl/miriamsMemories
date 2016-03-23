var Sequelize = require('sequelize');
if (process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.JAWSDB_URL);

  var connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  // LOCAL DB
  var connection = new Sequelize('mmdb', 'root');
}


module.exports = Patient;

var PatientComment = connection.define('Question', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  comment:Sequelize.String
});