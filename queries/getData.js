const databaseConnection = require('../database/db_connections.js');

const getData = cb => {
  databaseConnection.query(`SELECT auth.name, mentors.cohort, mentors.gitter_handle, string_agg(categories.selected_category, ', '), mentors.other FROM auth INNER JOIN mentors ON auth.id = mentors.auth_id INNER JOIN categories ON categories.auth_id = mentors.auth_id  GROUP BY auth.name, mentors.cohort, mentors.gitter_handle, mentors.other`, (err, res) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      console.log(res.rows);
      cb(null, res.rows);
    }
  });
};

module.exports = getData;

// SELECT meSELECT mentors.name, mentors.gitter_handle, string_agg(categories.selected_category, ', '), mentors.other FROM mentors INNER JOIN categories ON categories.mentors_id = mentors.id GROUP BY mentors.name, mentors.gitter_handle, mentors.other;


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
