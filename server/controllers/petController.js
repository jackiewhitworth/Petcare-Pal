const { models } = require('mongoose');
const Pet = require('../models/pet.js');

const petController = {};

petController.getPets = (req, res, next) => 
{
  Pet.find()
    .then(data => {
      res.locals.pets = data;
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught error in getPets middleware'
      });
    });
}

module.exports = petController;