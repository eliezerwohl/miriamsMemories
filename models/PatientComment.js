var Sequelize = require('sequelize');
if (process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.JAWSDB_URL);

  var connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  // LOCAL DB
  var connection = new Sequelize('mmdb', 'root');
}
var Patient = connection.define('Patient', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  dob:Sequelize.STRING,
  phonenumber:Sequelize.STRING,
  email:Sequelize.STRING
});

module.exports = Patient;