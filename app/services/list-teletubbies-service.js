const teletubbiesModel = require('../models/teletubbies');

const ListTeletubbiesService = {
  perform() {
    return new Promise((resolve, reject) => {

      teletubbiesModel.find()
        .then((teletubbies) => {
          if (teletubbies.length === 0) {
            const err = new Error('Teletubbies not found');
            reject(err);
          }
          return resolve(teletubbies);
        });
    });
  }
};


module.exports = ListTeletubbiesService;
