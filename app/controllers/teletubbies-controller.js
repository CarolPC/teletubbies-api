const listTeletubbiesService = require('../services/list-teletubbies-service');
const createTeletubbieService = require('../services/create-teletubbie-service');
const updateTeletubbieService = require('../services/update-teletubbie-service');
const findTeletubbieService = require('../services/find-teletubbie-service');

const TeletubbiesController = {

  index(req, res, next) {

    listTeletubbiesService.perform()
      .then((teletubbies) => {
        res.status(200).json({
          data: teletubbies
        });
      })
      .catch((error) => {
        next(error);
      });
  },

  create(req, res, next) {
    const teletubbie = req.body;

    createTeletubbieService.perform(teletubbie)
      .then((teletubbie) => {

        res.status(201).json({
          message: 'Teletubbie added to database',
          data: teletubbie
        });
      })
      .catch((error) => {
        next(error);
      });
  },

  update(req, res, next) {
    const teletubbie = req.body;
    const teletubbieId = req.params.id;
    updateTeletubbieService.perform(teletubbieId, teletubbie)
      .then((teletubbie) => {

        res.status(201).json({
          message: 'Teletubbie updated in database',
          data: teletubbie
        });
      })
      .catch((error) => {
        next(error);
      });
  },

  find(req, res, next) {
    const teletubbieId = req.params.id;

    findTeletubbieService.perform(teletubbieId)
      .then((teletubbie) => {

        res.status(201).json({
          message: 'Teletubbie found',
          data: teletubbie
        });
      })
      .catch((error) => {
        next(error);
      });
  }
};

module.exports = TeletubbiesController;