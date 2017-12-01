const databaseConnection = require('../database/db_connections.js');

const getFac = cb => {
  databaseConnection.query("SELECT * FROM mentors WHERE category='Life at FAC'", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getFac;
