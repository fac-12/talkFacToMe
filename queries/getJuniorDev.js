const databaseConnection = require('../database/db_connections.js');

const getJuniorDev = cb => {
  databaseConnection.query("SELECT * FROM mentors WHERE other='Junior Dev'", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getJuniorDev;