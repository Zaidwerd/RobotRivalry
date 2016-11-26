/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const db = require('../lib/dbConnect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const SALTROUNDS = 10;

function createQuestion(req, res, next) {
  console.log('enter question!')
  db.none(`INSERT INTO questions (question, correct_answer, answerA, answerB, answerC, answerD, category, difficulty) Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [req.body.question, req.body.correct_answer, req.body.answerA, req.body.answerB, req.body.answerC, req.body.answerD, req.body.category, req.body.difficulty])
    .then(next())
    .catch(error => next(error));
}

function getAllMisc(req, res, next){
  console.log('Knowledge Yes!')
  db.any('SELECT * from questions WHERE category = General Knowledge;')
    .then(next())
    .catch(error => next(error));
}

function getAllSongs(req,res, next){
  console.log('Music Rocks!')
  db.any('SELECT * from questions WHERE category = Entertainment: Music;')
    .then(next())
    .catch(error => next(error));
}

function getAllTv(req, res, next){
  console.log('TV!!')
  db.any('SELECT * from questions WHERE category = Entertainment: Televsion;')
    .then(next())
    .catch(error => next(error));
}

function getAllSports(req, res, next){
  console.log('ESPN!')
  db.any('SELECT * from questions WHERE category = Sports;')
    .then(next())
    .catch(error => next(error));
}

function getAllGeo(req, res, next){
  console.log('Geography!!!')
  db.any('SELECT * from questions WHERE category = Geography;')
    .then(next())
    .catch(error => next(error));
}


function getAllHistory(req, res, next){
  console.log('History yay')
  db.any('SELECT * from questions WHERE category = History;')
    .then(next())
    .catch(error => next(error));
}

function getAllPolitics(req, res, next){
  console.log('Obama')
  db.any('SELECT * from questions WHERE category = Politics;')
    .then(next())
    .catch(error => next(error));
}

function getAllCelebs(req, res, next){
  console.log('Hollywood')
  db.any('SELECT * from questions WHERE category = Celebrities;')
    .then(next())
    .catch(error => next(error));
}

function getAllAnimals(req, res, next){
  console.log('Kitties!!')
  db.any('SELECT * from questions WHERE category = Animals;')
    .then(next())
    .catch(error => next(error));
}


  // catAnimals(){
  //   this.setState({category: 27})
  // }

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
