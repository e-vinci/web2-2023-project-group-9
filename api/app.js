const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://youss17abou.github.io/mortalkeyboard/', 'https://youss17abou.github.io'],
};

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');
const registerRouter = require('./routes/auths');
const gameRouter = require('./routes/game');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/auths', authsRouter);
app.use('/register', registerRouter);
app.use('/game', gameRouter);

module.exports = app;
