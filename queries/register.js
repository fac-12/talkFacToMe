const databaseConnection = require('../database/db_connections.js');
const bcrypt = require("bcryptjs");
const hashPassword = require('../src/auth');

const registerUser = (name, username, password, cb) => {
    databaseConnection.query(`Select * from auth WHERE username = $1`, [username], (err, res) => {
          if (err) {
            return cb(err);
          } else if (res.rows === []){
            let hashedPassword = hashPassword(password);
              databaseConnection.query(`INSERT INTO auth (name, username, hashedPassword) VALUES ($1, $2, $3)`, [name, username, hashedPassword], (err, res) => {
                if (err) {
                  cb(err);
                }
              })
          }
        })
      }

        module.exports = registerUser;
