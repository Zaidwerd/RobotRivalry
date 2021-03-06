/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const db = require('../lib/dbConnect');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')

// const SALTROUNDS = 10;

// ALL QUESTIONS WITHOUT A 'CREATED BY' TAG WERE DOWNLOADED FROM
// OPEN TRIVIA DATABASE'S API (https://opentdb.com/). WE CHOSE TO POPULATE OUR OWN DATABSE
// BECAUSE THE API WOULD HAVE BREAK EVERY SO OFTEN.


function createQuestion(req, res, next) {
  console.log('enter question!')
  db.none(`INSERT INTO new_questions (question, correct_answer, answerA, answerB, answerC, answerD, category, difficulty, created_by) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [req.body.question, req.body.correct_answer, req.body.answerA, req.body.answerB, req.body.answerC, req.body.answerD, req.body.category, req.body.difficulty, req.body.created_by])
    .then(next())
    .catch(error => next(error));
}

function getAllMisc(req, res, next){
  console.log('Knowledge Yes!')
  db.any(`
    SELECT * FROM questions
    WHERE category='General Knowledge'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}

function getAllSongs(req,res, next){
  console.log('Music Rocks!')
  db.any(`
    SELECT * FROM questions
    WHERE category='Entertainment: Music'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}


function getAllTv(req, res, next){
  console.log('TV!!')
  db.any(`
    SELECT * FROM questions
    WHERE category='Entertainment: Television'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}

function getAllSports(req, res, next){
  console.log('ESPN!')
  db.any(`
    SELECT * FROM questions
    WHERE category='Sports'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}

function getAllGeo(req, res, next){
  console.log('Geography!!!')
  db.any(`
    SELECT * FROM questions
    WHERE category='Geography'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}


function getAllHistory(req, res, next){
  console.log('History yay')
  db.any(`
    SELECT * FROM questions
    WHERE category='History'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}

function getAllPolitics(req, res, next){
  console.log('Obama')
  db.any(`
    SELECT * FROM questions
    WHERE category='Politics'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}

function getAllCelebs(req, res, next){
  console.log('Hollywood')
  db.any(`
    SELECT * FROM questions
    WHERE category='Celebrities'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}

function getAllAnimals(req, res, next){
  console.log('Kitties!!')
  db.any(`
    SELECT * FROM questions
    WHERE category='Animals'
    ORDER BY RANDOM()
    LIMIT 10;`)
    .then((questions) => {
      res.rows = questions;
      next();
    })
    .catch(error => next(error));
}


module.exports = {
  createQuestion,
  getAllMisc,
  getAllSongs,
  getAllTv,
  getAllSports,
  getAllGeo,
  getAllHistory,
  getAllPolitics,
  getAllCelebs,
  getAllAnimals
}
