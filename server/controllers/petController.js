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

petController.addPet = (req, res, next) => {
  Pet.create({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
    weight: req.body.weight
  })
  .then(next())
  .catch(err => {
    return next({
      log: 'Express error handler caught error in addPet middleware'
    });
  });
};

//look for pet {name} in database
//save results for specific pets in res.locals.profile
petController.getProfile = (req, res, next) => {
  const { name } = req.params;
  Pet.find({name: name})
    .then(data => {
      res.locals.profile = data[0];
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught error in getProfile middleware'
      });
    });
};

module.exports = petController;