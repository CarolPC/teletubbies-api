const listTeletubbiesService = require('../services/list-teletubbies-service');
const createTeletubbieService = require('../services/create-teletubbie-service');

const TeletubbiesController = {

  index(req, res, next) {

    listTeletubbiesService.perform()
    .then((teletubbies) => {
      res.status(200).json({ data: teletubbies });
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
      })
    })
    .catch((error) => {
      next(error);
    });
  },
};

module.exports = TeletubbiesController;
