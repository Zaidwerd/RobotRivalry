/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

// const bcrypt    = require('bcryptjs');
const userModel = require('../models/user');


/**
 * logIn - Middleware to compare password from login form with password
 *         from the user in the DB. If matches, the user Id is stored in the
 *         session.
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */
function logIn(req, res, next) {
  const userPayload = req.body;

  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = userPayload.password === dbUser.password;

    if (matches) {
      res.user = dbUser;
      next();
    } else {
      res.error = true;
      next();
    }
  })
      /* NOTE: NO USERS or all ERRORS*/
      .catch((error) => {
        console.error('Error ', error);
        res.error = error;
        next();
      });
}

/**
 * authenticate - Middleware to protect routes
 *
 * @param {object} req  request object
 * @param {object} res  response object
 * @param {function} next invoked to continue the response flow
 *
 */
// function authenticate(req, res, next) {
//   if (req.session.userId) {
//     userModel.getUserById(req.session.userId).then((dbUser) => {
//       res.user = dbUser;
//       next();
//     }).catch(() => {
//       res.redirect('/login');
//     });
//   } else {
//     res.redirect('/login');
//   }
// }

module.exports = {
  logIn,
  // authenticate
};
