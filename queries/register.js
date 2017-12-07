"use strict";
const databaseConnection = require('../database/db_connections.js');
const hashPassword = require('../src/auth');

const registerUser = (name, username, password, cb) => {
  console.log("Register User running");
    databaseConnection.query(`Select * FROM auth WHERE username = $1`, [username], (err, res) => {
      console.log("res rows: ", res.rows);
          if (err) {
            return cb(err);
          } else if (res.rows === []){ console.log(name, username, password)
            let hashedPassword = hashPassword(password);
              databaseConnection.query(`INSERT INTO auth (name, username, hashedPassword) VALUES ($1, $2, $3)`, [name, username, hashedPassword], (err, res) => {
        if(err){
                  cb(err);
                }
              })
          }
        })
      }

        module.exports = registerUser;
