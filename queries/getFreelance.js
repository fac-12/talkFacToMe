const databaseConnection = require('../database/db_connections.js');

const getFreelance = cb => {
  databaseConnection.query("SELECT * FROM mentors WHERE category='Freelancing'", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getFreelance;
