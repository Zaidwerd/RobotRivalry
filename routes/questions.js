const express            = require('express');
const { createQuestion,
        getAllMisc,
        getAllSongs,
        getAllTv,
        getAllSports,
        getAllGeo,
        getAllHistory,
        getAllPolitics,
        getAllCelebs,
        getAllAnimals  } = require('../models/questions.js');
const { authenticate }   = require('../lib/auth');
const questionsRouter    = express.Router();

const sendJSONresp = (req, res) => res.json(res.rows);

questionsRouter.post('/', createQuestion, (req, res) => {
  res.redirect('/#/addQuestions');
});

questionsRouter.get('/music', getAllSongs, sendJSONresp);

module.exports = questionsRouter;

// getAllMisc, getAllSongs, getAllTv,
//   getAllSports, getAllGeo, getAllHistory, getAllPolitics,
//   getAllCelebs, getAllAnimals, (req, res ) => {
//   res.json(res.questions || []);
//   });
