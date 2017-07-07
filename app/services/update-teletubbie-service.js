const teletubbiesModel = require('../models/teletubbies');

const UpdateTeletubbieService = {
  perform(teletubbieId, teletubbie) {
    return new Promise((resolve, reject) => {

      teletubbiesModel.findByIdAndUpdate(teletubbieId, teletubbie)
        .then((teletubbieUpdated) => {
          resolve({
            data: {
              teletubbie: teletubbieUpdated
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

module.exports = UpdateTeletubbieService;