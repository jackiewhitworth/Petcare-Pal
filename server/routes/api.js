const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');


router.get('/', petController.getPets, (req, res, next) => {
  return res.status(200).json(res.locals.pets);
});

router.get('/add-pet', petController.addPet, (req, res, next) => {
  return (res.status)
})

module.exports = router;