const express = require('express');
const { robotsRule } = require('../services/robot');

const robotsRouter = express.Router();

robotsRouter.get('/', robotsRule, (req, res ) => {
  res.json(res.robot);
});

module.exports = robotsRouter;
