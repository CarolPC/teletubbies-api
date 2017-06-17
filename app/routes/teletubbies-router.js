const teletubbies = require('express').Router();
const controller = require('../controllers/teletubbies-controller');

teletubbies.get('/', controller.index);

module.exports = teletubbies;
