var Sequelize = require('sequelize');
if (process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.JAWSDB_URL);

  var connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  // LOCAL DB
  var connection = new Sequelize('mmdb', 'root');
}

var Note = connection.define("Note", {
  note:Sequelize.STRING,
  firstname:Sequelize.STRING,
  lastname:Sequelize.STRING
});

module.exports = Note;