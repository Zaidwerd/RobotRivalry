/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createUser, getUserByUsername, listUsers, deleteUser, editUser, getUserStats, updateUserStats }    = require('../models/user.js');
// const { authenticate }   = require('../lib/auth');

const usersRouter  = express.Router();

usersRouter.put('/update/:id', updateUserStats, (req, res) => {
  console.log('ok');
})

usersRouter.get('/', listUsers, (req, res) => {
  res.json(res.users.map((user) => {
    const { id, username, password } = user;
    return { id, username, password };
  }));
});

usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/#/login');
});

usersRouter.delete('/:username', deleteUser,  (req, res) => {
  res.redirect('/user');
});

usersRouter.put('/:username', editUser,  (req, res) => {
  res.redirect('/user');
});


// usersRouter.get('/profile', (req, res) => {
//   res.json(res.user);
// });

usersRouter.get('/:username', getUserByUsername, getUserStats, (req, res) => {
  res.json(res.user);
});

module.exports = usersRouter;
