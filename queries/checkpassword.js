const databaseConnection = require('../database/db_connections.js');
const bcrypt = require('bcryptjs');

const checkPassword = (username, password, cb) => {
  databaseConnection.query(`SELECT password FROM auth WHERE username = $1`, [username], (err, res) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      console.log("hashed password: ", res.rows[0].password);
      console.log('password: ', password);
      const correctP = bcrypt.compare(password, res.rows[0].password, cb);
      cb(null, correctP);
    }
  });
};

module.exports = checkPassword;
