const databaseConnection = require('../database/db_connections.js');

const getInternship = cb => {
  databaseConnection.query("SELECT * FROM mentors WHERE category='Internship'", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getInternship;
