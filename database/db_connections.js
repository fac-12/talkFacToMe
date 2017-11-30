// pg converts SQL modules into JS modules and vice versa
const { Pool } = require('pg');
const url = require('url');
// config.env is used to store sensitive information
require('env2')('./config.env');

let DB_URL = process.env.DB_URL;
if(process.env.NODE.ENV === 'test'){
    DB_URL = process.env.TEST_DB_URL;
}

if(!DB_URL) throw new Error('Environment variable DB_URL must be set');

const params = url.parse(DB_URL);

//create one array containing username and password in the url
const [username, password] = params.auth.split(':');

const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    //maximum amount of connections that can be passe to the database. DB_MAX_CONNECTIONS is defined in config.env, if it isn't it is set to be max 2
    max: process.env.DB_MAX_CONNECTIONS || 2,
    user: username,
    password,

    // if you want to access a remote server use ssl (a secure connection) otherwise use local host
    ssl: params.hostname !== 'localhost',
};

module.exports = new Pool(options);

// This file has all the connections required to set up a database connection
