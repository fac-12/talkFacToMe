const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  bcrypt.genSalt(10, (err, salt) => {
  if (err) {
  console.log(err);
} else {
bcrypt.hash(password, salt);
}
});
};

module.exports = hashPassword;