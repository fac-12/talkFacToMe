"use strict";

const databaseConnection = require('../database/db_connections.js');
const hashPassword = require('../src/auth');

const registerUser = (username, password, cb) => {
console.log("Register User running");
let hashedPassword = hashPassword(password);
databaseConnection.query(`INSERT INTO auth (username, password) VALUES ($1, $2)`, [username, hashedPassword], (err, res) => {
  if (err) {
    console.log(err);
    cb(err);
  } else {
    console.log(res);
    cb(null, res);
  }
})
}


module.exports = registerUser;
