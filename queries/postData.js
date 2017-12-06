const databaseConnection = require('../database/db_connections.js');

const postData = (name, cohortNumber, gitterHandle, categoryArray, other, cb) => {
    databaseConnection.query(`INSERT INTO mentors (name, cohort, gitter_handle, other) VALUES ($1, $2, $3, $4) RETURNING id`, [name, cohortNumber, gitterHandle, other], (err, res) => {
          if (err) {
            return cb(err);
          } else {
            categoryArray.forEach((value, index, array) => {
              let id = res.rows[0].id;
              databaseConnection.query(`INSERT INTO categories (mentors_id, selected_category) VALUES ($1, $2)`, [id, value], (err, res) => {
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
