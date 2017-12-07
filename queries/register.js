"use strict";

const databaseConnection = require('../database/db_connections.js');
const bcrypt = require('bcryptjs');

const registerUser = (username, password, cb) => {
console.log("Register User running");
  bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
    console.log(err);
  } else {
    console.log("hash: ", hash);
    databaseConnection.query(`INSERT INTO auth (username, password) VALUES ($1, $2)`, [username, hash], (err, res) => {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        console.log(res);
        cb(null, res);
      }
    })
    }
  })
})
}



module.exports = registerUser;
