const listTeletubbiesService = require('../services/list-teletubbies-service');

const TeletubbiesController = {

  index(req, res, next) {

    listTeletubbiesService.perform()
    .then((teletubbies) => {
      res.status(200).json({ data: teletubbies });
    });
  },
};

module.exports = TeletubbiesController;
