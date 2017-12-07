const databaseConnection = require('../database/db_connections.js');

const postData = (name, cohortNumber, gitterHandle, categoryArray, other, cb) => {
    databaseConnection.query(`insert into mentors (auth_id, cohort, gitter_handle, other) VALUES ((select id from auth where username = $1), $2, $3, $4) RETURNING auth_id;`, [name, cohortNumber, gitterHandle, other], (err, res) => {
          if (err) {
            return cb(err);
          } else {
            categoryArray.forEach((value, index, array) => {
              let auth_id = res.rows[0].auth_id;
              databaseConnection.query(`INSERT INTO categories (auth_id, selected_category) VALUES ($1, $2)`, [auth_id, value], (err, res) => {
                if (err) {
                  cb(err);
                } else if (index === categoryArray.length - 1) {
                  cb(null, res);
                }
              })
            })
          }
        })
      }

        module.exports = postData;

      // const postData = (name, cohortNumber, gitterHandle, category, talkInfo, cb) => {
      //   databaseConnection.query(
      //     'INSERT INTO mentors (name, cohort, gitter_handle, category, other) VALUES ($1, $2, $3, $4, $5)',
      //     [name, cohortNumber, gitterHandle, category, talkInfo],
      //     (err, res) => {
      //       if (err) {
      //         return cb(err);
      //       } else {
      //         console.log('postData running');
      //         cb(null, res);
      //       }
      //     }
      //   );
      // };
