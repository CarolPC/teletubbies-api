const { mongoose, mongoSchema } = require('../db');

const nameRequired = [true, 'The character must have a name'];
const colorRequired = [true, 'The character must have a color'];
const genders = {
  values: ['male', 'female', 'fluid'],
  message: 'Gender should be male, female or fluid'
};

const teletubbiesSchema = mongoSchema(
  {
    name: { type: String, trim: true, unique: true, required: nameRequired },
    color: { type: String, trim: true, required: colorRequired },
    gender: { type: String, enum: genders},
    favoriteFood: { type: String }
  }
);

const teletubbies = mongoose.model('teletubbies', teletubbiesSchema);

module.exports = teletubbies;
