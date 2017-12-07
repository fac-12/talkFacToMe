const databaseConnection = require('../database/db_connections.js');

const getFac = cb => {
  databaseConnection.query(`SELECT auth.name, mentors.cohort, mentors.gitter_handle, string_agg(categories.selected_category, ', '), mentors.other FROM auth INNER JOIN mentors ON auth.id = mentors.auth_id INNER JOIN categories ON mentors.auth_id = categories.auth_id WHERE categories.selected_category='Life at FAC' GROUP BY auth.name, mentors.cohort, mentors.gitter_handle, mentors.other`, (err, res) => {
console.log(res.rows)
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getFac;
