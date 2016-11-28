/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const db = require('../lib/dbConnect');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')

// const SALTROUNDS = 10;

function createUser(req, res, next) {
  console.log('entering data into users');
  db.none(`INSERT INTO users (username, email, first_name, last_name, age, gender, zodiac, state, password, image) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [req.body.username, req.body.email, req.body.first_name, req.body.last_name, req.body.age, req.body.gender, req.body.zodiac, req.body.state, req.body.password, req.body.image])
  // db.one(
  //   `INSERT INTO users (username, email, first_name, last_name, age, gender, zodiac, state, password) Values ($/username/, $/email/, $/first_name/, $/last_name/, $/age/, $/gender/, $/zodiac/, $/state/, bcrypt.hashSync(req.body.user.password, SALTROUNDS));`
  // )
    // Store hashed password
    // password: bcrypt.hashSync(req.body.user.password, SALTROUNDS)
  .then(next())
  .catch(error => next(error));
}

function deleteUser(req, res, next) {
  console.log('entering data into users');
  db.none(`DELETE FROM users WHERE id = $1`, [req.body.id])
  .then(next())
  .catch(error => next(error));
}

function editUser(req, res, next) {
  console.log('entering data into users');
  db.none(`UPDATE users SET(first_name = $1, last_name = $2, age = $3, state = $4`, [req.body.first_name, req.body.last_name, req.body.age, req.body.state])
  .then(next())
  .catch(error => next(error));
}


// function getUserById(id) {
//   const promise = new Promise((resolve, reject) => {
//   db.one(
//     `SELECT * FROM users Where id = $/id/`, req.body)
//   .then((user) => {
//     res.rows = user;
//     next();
//   })
//   .catch(error => next(error));
//   });
//   return promise;
// }

function getUserByUsername(username) {
    return db.one(
    `SELECT * FROM users WHERE username=$1;`, [req.body.username])
  // .then((user) => {
  //   res.user = user;
  //   console.log(user)
  //   next();
  // })
  // .catch(error => next(error));
  }

function listUsers(req, res, next) {
  db.any('SELECT * FROM users;')
    .then((users) => {
      res.users = users;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

function getUserStats(username) {
  return db.one(
  `SELECT * FROM users WHERE username=$1;`, [req.body.username])
  .then((user) => {
    res.user = user;
    console.log(user)
    next();
  })
  .catch(error => next(error));
}


module.exports = {
  createUser,
  deleteUser,
  editUser,
  listUsers,
  // getUserById,
  getUserStats,
  getUserByUsername
};
