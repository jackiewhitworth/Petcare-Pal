const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');


router.get('/', petController.getPets, (req, res) => {
  return res.status(200).json(res.locals.pets);
});

router.get('/pet-profile/:name', petController.getProfile, (req, res) => {
  return res.status(200).json(res.locals.profile);
});

router.post('/add-pet', petController.addPet, (req, res) => {
  return res.status(200);
});

router.delete('/delete-pet/:name', petController.deletePet, (req, res) => {
  return res.status(200);
});



module.exports = router;