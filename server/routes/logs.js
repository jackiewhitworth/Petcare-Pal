const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

router.get('/', logController.getLogs, (req, res) => {
  res.status(200).json(res.locals.logs);
})

router.post('/meal/:name', logController.createMeal, (req, res) => {
  res.status(200).json(res.locals.log)
});

router.post('/walk/:name', logController.createWalk, (req, res) => {
  res.status(200).json(res.locals.log)
});

module.exports = router;