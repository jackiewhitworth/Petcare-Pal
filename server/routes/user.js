const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const userController = require('../controllers/userController');

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200);
})

router.post('/login', userController.validateUser, (req, res) => {
  res.status(200)
})

module.exports = router;