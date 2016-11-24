/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const db = require('../lib/dbConnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const SALTROUNDS = 10;

function createQuestion(req, res, next) {
  console.log('enter question!')
  db.none(`INSERT INTO questions (question, correct_answer, incorrect_answers, difficulty, category) Values ($1, $2, $3, $4, $5`, [req.body.question, req.body.correct_answer, req.body.incorrect_answers, req,body.difficulty, req.body.category])
    .then(next())
    .catch(error => next(error));
}

module.exports = {
  createQuestion
}
