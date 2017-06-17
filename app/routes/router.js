const router = require('express').Router();
const teletubbiesRouter = require('./teletubbies-router');

router.use('/teletubbies', teletubbiesRouter);

module.exports = router;
