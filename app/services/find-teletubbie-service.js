const teletubbiesModel = require('../models/teletubbies');

const FindTeletubbiesService = {
  perform(teletubbieId) {
    return new Promise((resolve, reject) => {

      teletubbiesModel.findById(teletubbieId)
        .then((teletubbie) => {
          if (!teletubbie) {
            const err = new Error('Teletubbie not found');
            reject(err);
          }
          return resolve(teletubbie);
        });
    });
  }
};


module.exports = FindTeletubbiesService;