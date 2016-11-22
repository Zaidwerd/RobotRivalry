/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const db = require('../lib/dbConnect')
const bcrypt = require('bcryptjs');

const SALTROUNDS = 10;

module.exports = {

  createUser(req, res, next) {
  db.one(
    'INSERT INTO users (username, email, first_name, last_name, age, gender, zodiac, state, password) Values ($/username/, $/email/, $/first_name/, $/last_name/, $/age/, $/gender/, $/zodiac/, $/state/, bcrypt.hashSync(req.body.user.password, SALTROUNDS));'
  )
    // Store hashed password
    // password: bcrypt.hashSync(req.body.user.password, SALTROUNDS)
  };

  then((data) => {
    res.rows = users;
    next();
  });
  .cathc(error => next(error));
}

getUserById(id) {
  const promise = new Promise((resolve, reject) => {
  db.one(
    'SELECT * FROM users Where id = $/id/')
  .then((user) => {
    res.rows = user;
    next();
  })
  .catch(error => next(error));
  });
  return promise;


  // return getDB().then((db) => {
  //   const promise = new Promise((resolve, reject) => {
  //     db.collection('users')
  //       .findOne({ _id: ObjectID(id) }, (findError, user) => {
  //         if (findError) reject(findError);
  //         db.close();
  //         resolve(user);
  //       });
  //   });
  //   return promise;
  // });
}

getUserByUsername(username) {
  const promise = new Promise((resolve, reject) => {
    db.one(
    'SELECT * FROM users Where username = $/username/')
  .then((user) => {
    res.rows = user;
    next();
  })
  .catch(error => next(error));
  });
  return promise;

//   return getDB().then((db) => {
//     const promise = new Promise((resolve, reject) => {
//       db.collection('users')
//         .findOne({ username }, (findError, user) => {
//           if (findError) reject(findError);
//           db.close();
//           resolve(user);
//         });
//     });
//     return promise;
//   });
}

};
