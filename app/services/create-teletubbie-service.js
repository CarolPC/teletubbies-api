const teletubbiesModel = require('../models/teletubbies');

const CreateTeletubbieService = {
  perform(teletubbie) {
    return new Promise((resolve, reject) => {
      teletubbieObject = new teletubbiesModel(teletubbie);

      teletubbieObject.save()
        .then((teletubbieCreated) => {
          resolve({
            data: {
              teletubbie: teletubbieCreated
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    })
  }
};

module.exports = CreateTeletubbieService;
