var express = require('express');

// const usersRouter = require('./UserRouter');
const todoRouter = require('./TodoRouter');

var router = express.Router();

// router.use('/user', usersRouter);
router.use('/todo', todoRouter);

module.exports = router