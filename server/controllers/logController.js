const Log = require('../models/log.js');
const logController = {};

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const fullDate = `${year}-${month}-${day}`;

logController.getLogs = (req, res, next) => {
  Log.find({date: fullDate})
    .then(data => {
      res.locals.logs = data;
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught error in getLogs middleware'
      });
    });
};


logController.createMeal = (req, res, next) => {
  Log.create({
    date: fullDate, 
    meals: {
      first: {
        time: `${today.getHours()}:${today.getMinutes()}`
      }
    },
    pet_id: req.query.id
  })
    .then(data => {
      res.locals.log = data
      return next()})
    .catch(err => {
      return next({
        log: {err: 'Express error handler caught error in createMeal middleware:'}
      });
    });
};

logController.createWalk = (req, res, next) => {
  Log.create({
    date: fullDate, 
    walks: {
      first: {
        time: `${today.getHours()}:${today.getMinutes()}`
      }
    },
    pet_id: req.query.id
  })
    .then(data => {
      res.locals.log = data
      return next()})
    .catch(err => {
      return next({
        log: {err: 'Express error handler caught error in createWalk middleware:'}
      });
    });
};

module.exports = logController;