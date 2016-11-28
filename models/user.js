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

function updateUserStats(req, res, next) {
  console.log('updating user stats');
  db.none(`UPDATE users
          SET(num_games_played = $1, total_num_correct = $2, total_num_incorrect = $3, num_generalknowledge_played = $4, num_generalknowledge_correct = $5, num_generalknowledge_incorrect = $6, num_music_played = $7, num_music_correct = $8, num_music_incorrect = $9, num_sports_played = $10, num_sports_correct = $11, num_sports_incorrect = $12, num_television_played = $13, num_television_correct = $14, num_television_incorrect = $15, num_geography_played = $16, num_geography_correct = $17, num_geography_incorrect = $18, num_history_played = $19, num_history_correct = $20, num_history_incorrect = $21, num_politics_played = $22, num_politics_correct = $23, num_politics_incorrect = $24, num_celebrities_played = $25, num_celebrities_correct = $26, num_celebrtities_incorrect = $27, num_animals_played = $28, num_animals_correct = $29, num_animals_incorrect = $30
          WHERE id = $31`, [req.body.num_games_played, req.body.total_num_correct, req.body.total_num_incorrect, req.body.num_generalknowledge_played, req.body.num_generalknowledge_correct, req.body.num_generalknowledge_incorrect, req.body.num_music_played, req.body.num_music_correct, req.body.num_music_incorrect, req.body.num_sports_played, req.body.num_sports_correct, req.body.num_sports_incorrect, req.body.num_television_played, req.body.num_television_correct, req.body.num_television_incorrect, req.body.num_geography_played, req.body.num_geography_correct, req.body.num_geography_incorrect, req.body.num_history_played, req.body.num_history_correct, req.body.num_history_incorrect, req.body.num_politics_played, req.body.num_politics_correct, req.body.num_politics_incorrect, req.body.num_celebrities_played, req.body.num_celebrities_correct, req.body.num_celebrtities_incorrect, req.body.num_animals_played, req.body.num_animals_correct, req.body.num_animals_incorrect, req.params.id])
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
    `SELECT * FROM users WHERE username=$1;`, [username])
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
  updateUserStats,
  getUserStats,
  getUserByUsername
};
