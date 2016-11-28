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

questionsRouter.get('/misc', getAllMisc, sendJSONresp);
questionsRouter.get('/music', getAllSongs, sendJSONresp);
questionsRouter.get('/tv', getAllTv, sendJSONresp);
questionsRouter.get('/sports', getAllSports, sendJSONresp);
questionsRouter.get('/geo', getAllGeo, sendJSONresp);
questionsRouter.get('/history', getAllHistory, sendJSONresp);
questionsRouter.get('/politics', getAllPolitics, sendJSONresp);
questionsRouter.get('/celebs', getAllCelebs, sendJSONresp);
questionsRouter.get('/animals', getAllAnimals, sendJSONresp);


module.exports = questionsRouter;
