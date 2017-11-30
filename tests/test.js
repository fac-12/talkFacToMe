const tape = require('tape');
const runDbBuild = require('../database/db_build');
const getData = require('../queries/getData');
const postData = require('../queries/postData');
const shot = require('shot');
const router = require('../src/router');

tape('Get Data', (t) => {
  runDbBuild(function (err, res){
      let expected =
        {
          id: 1,
          name:'Nat',
          cohort: 12,
          gitter_handle: '@njseeto',
          other: 'Life at FAC'
        };
      getData((err, res) => {
        if(err) console.log(err);
        console.log(res);
        t.deepEquals(res[0], expected, "response returns expected entry");
        t.end();
      });
  });
});

tape('Post Data', (t) => {
  runDbBuild(function(err, res){
    t.error(err, "No error!");
    let expected =
    {
      id:4,
      name: 'Fatimat',
      cohort: 12,
      gitter_handle: '@gbaja',
      other: 'Careers'
    }
    postData('Fatimat', 12, '@gbaja', 'Careers', (err, result) => {
      if(err) console.log(err);
      getData((err, res) => {
        if(err) console.log(err);
        console.log(res);
        t.deepEquals(res[3], expected, 'response returns expected new entry');
        t.end();
      })
    });
  });
});


tape('Home route', (t) => {
  shot.inject(router, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.equal(res.statusMessage, 'OK', 'Correct type of document');
    t.end();
  });
});

tape('Unknown route', (t) => {
  shot.inject(router, { method: 'get', url: '/elephant' }, (res) => {
    t.equal(res.statusCode, 404, 'should respond with a status code of 404');
    t.equal(res.payload, 'unknown uri', 'response should contain \'unknown uri\'');
    t.end();
  });
});
