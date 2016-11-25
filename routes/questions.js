const express      = require('express');
const { createQuestion }    = require('../models/questions.js');
const { authenticate }   = require('../lib/auth');

const questionsRouter  = express.Router();

usersRouter.post('/', createQuestion, (req, res) => {
  res.redirect('/#/login');
});

module.exports = questionsRouter;
