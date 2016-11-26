/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createUser, getUserByUsername, listUsers, deleteUser }    = require('../models/user.js');
// const { authenticate }   = require('../lib/auth');

const usersRouter  = express.Router();

usersRouter.get('/', listUsers, (req, res) => {
  res.json(res.users.map((user) => {
    const { id, username, password } = user;
    return { id, username, password };
  }));
});

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/#/login');
});

// usersRouter.delete('/', deleteUser,  (req, res) => {
//   res.redirect('/user');
// });

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
usersRouter.get('/profile', (req, res) => {
  res.json(res.user);
});

// usersRouter.get('/:username', getUserByUsername, (req, res) => {
//   res.send(res.user);
// });

module.exports = usersRouter;
