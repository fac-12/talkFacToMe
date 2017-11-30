const fs = require('fs');
const dbConnection = require('./db_connections');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

//Create project table
dbConnection.query(sql, (err, res) => {
    if(err) throw err;
    else {
    console.log("Table created", res);
  }
});

const runDbBuild = cb => {
 dbConnection,query(sql, (err, res) => {
     if (err) return cb(err);
     cb(null, res);
 });
};

module.exports = runDbBuild;
