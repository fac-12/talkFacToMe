const tape = require('tape');
const runDbBuild = require('../database/db_build');
// const getData = require('../queries/getData');
// const postData = require('../queries/postData');

tape("tape is working", (t) => {
    t.equals(1,1, "one equals one");
    t.ends();
});

