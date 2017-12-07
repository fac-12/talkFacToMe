// const bcrypt = require('bcryptjs');
//
// const hashPassword = (password) => {
//   console.log("hash password running:", password);
//   bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     if (err) {
//     console.log(err);
//   } else {
//
//   }
// });
// })
// }
//
// module.exports = hashPassword;
//
//
// const hashPassword = (password, callback) => {
//   // use bcrypt to hash the password and return it asynchronously
//   bcrypt.genSalt(10, function(err,salt) {
//     bcrypt.hash(password, salt, function(err,hash){
//         if (err){
//           callback(err);
//         } else {
//           callback(null,hash);
//         }
//         return hash;
//      });
//   });
// };
