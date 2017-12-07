const databaseConnection = require('../database/db_connections.js');

const checkUser = (username, cb) => {
  databaseConnection.query(`SELECT (case when exists (select username from auth where username =$1) then 1 else 0 end) as column`, [username], (err, res) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      console.log(res.rows);
      cb(null, res);
    }
  });
};

module.exports = checkUser;
