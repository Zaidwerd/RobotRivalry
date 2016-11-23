/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const db = require('../lib/dbConnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const SALTROUNDS = 10;

function createUser(req, res, next) {
  db.one(
    `INSERT INTO users (username, email, first_name, last_name, age, gender, zodiac, state, password) Values ($/username/, $/email/, $/first_name/, $/last_name/, $/age/, $/gender/, $/zodiac/, $/state/, bcrypt.hashSync(req.body.user.password, SALTROUNDS));`
  )
    // Store hashed password
    // password: bcrypt.hashSync(req.body.user.password, SALTROUNDS)

  .then((users) => {
    res.rows = users;
    next();
  })
  .catch(error => next(error));
}

function getUserById(id) {
  const promise = new Promise((resolve, reject) => {
  db.one(
    `SELECT * FROM users Where id = $/id/`, req.body)
  .then((user) => {
    res.rows = user;
    next();
  })
  .catch(error => next(error));
  });
  return promise;
}

function getUserByUsername(username) {
  const promise = new Promise((resolve, reject) => {
    db.one(
    `SELECT * FROM users Where username = $/username/`, req.body)
  .then((user) => {
    res.rows = user;
    next();
  })
  .catch(error => next(error));
  });
  return promise;
}



module.exports = {
  createUser,
  getUserById,
  getUserByUsername
};
