const databaseConnection = require('../database/db_connections.js');

const getMentor = cb => {
  databaseConnection.query("SELECT * FROM mentors WHERE other='Mentoring'", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getMentor;