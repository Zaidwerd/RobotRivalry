'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
// const jwt     = require('jsonwebtoken');
// const expressJWT = require('express-jwt')

const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

const bodyParser = require('body-parser');
// const session         = require('express-session');
// const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const authRouter      = require('./routes/auth');
const usersRouter     = require('./routes/users');
const questionsRouter = require('./routes/questions');
// const robotsRouter    = require('./routes/robots');
// const secret = 'secret'


app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// app.use(cookieParser());

// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: SECRET
// }));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Modular routes

// // import router for our API
// const apiPuppiesRouter = require('./routes/api/puppies');

// // map our apiRouter to the '/api' route
// app.use('/api/puppies', apiPuppiesRouter);

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/questions', questionsRouter);

app.listen(PORT, () => {
  console.log('woof! 🐶');
});
