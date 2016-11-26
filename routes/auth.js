
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express    = require('express');
const { logIn }  = require('../lib/auth');

// Router
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.json('hello');
});

/**
 * Log In and if successful assign res.user._id to the session
 * It uses the logIn middleware from the auth library to parse the form inputs
 * and save the user to the database
 */
authRouter.post('/', logIn, (req, res) => {
  res.json(res.user);
});

// Logout by assigning null to the userId in the session
authRouter.delete('/', (req, res) => {
  res.redirect('/');
});

module.exports = authRouter;
