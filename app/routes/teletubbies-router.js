const teletubbies = require('express').Router();
const controller = require('../controllers/teletubbies-controller');

teletubbies.get('/:id', controller.find);
teletubbies.get('/', controller.index);
teletubbies.post('/', controller.create);
teletubbies.put('/:id', controller.update);

module.exports = teletubbies;