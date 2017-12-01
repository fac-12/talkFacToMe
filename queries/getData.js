const databaseConnection = require('../database/db_connections.js');

const getData = cb => {
  databaseConnection.query('SELECT * FROM mentors', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;

// SELECT mentors.name, mentors.gitter_handle, categories.selected_category FROM mentors INNER JOIN categories ON categories.mentors_id = mentors.id
//old queries from the two table schema
// const alumni = 'SELECT name, gitter_handle FROM mentors INNER JOIN categories ON categories.mentors_id = mentors.id WHERE categories.category4 = 'Alumni'';
//
// const internship = 'SELECT name, gitter_handle FROM mentors INNER JOIN categories ON categories.mentors_id = mentors.id WHERE categories.category5 = 'Internship'';
//
// const career = 'SELECT name, gitter_handle FROM mentors INNER JOIN categories ON categories.mentors_id = mentors.id WHERE categories.category2 = 'Career'';
//
// const life = 'SELECT name, gitter_handle FROM mentors INNER JOIN categories ON categories.mentors_id = mentors.id WHERE categories.category3 = 'Life at FAC'';
//
// const student = 'SELECT name, gitter_handle FROM mentors INNER JOIN categories ON categories.mentors_id = mentors.id WHERE categories.category1 = 'Current Student'';
