/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const db = require('../lib/dbConnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const SALTROUNDS = 10;

function createQuestion(req, res, next) {
  console.log('enter question!')
  db.none(`INSERT INTO new_questions (question, correct_answer, answerA, answerB, answerC, answerD, category, difficulty, created_by) Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [req.body.question, req.body.correct_answer, req.body.answerA, req.body.answerB, req.body.answerC, req.body.answerD, req.body.category, req.body.difficulty, req.body.created_by])
    .then(next())
    .catch(error => next(error));
}

module.exports = {
  createQuestion
}
