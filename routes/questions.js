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

questionsRouter.post('/', createQuestion, (req, res) => {
  res.redirect('/');
});

questionsRouter.get('/category', getAllMisc, getAllSongs, getAllTv,
  getAllSports, getAllGeo, getAllHistory, getAllPolitics,
  getAllCelebs, getAllAnimals, (req, res ) => {
  res.json(res.questions || []);
  });


module.exports = questionsRouter;
