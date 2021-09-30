const User = require('../models/user.js');
const userController = {};
const bcrypt = require('bcrypt');

userController.createUser = async (req, res, next) => {
  const { firstname, lastname, username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
    User.create({
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: hash
    })
  .then(next())
  .catch(err => {
    return next({
      log: 'Express error handler caught error in addUser middleware'
    });
  });
};

//find username in database
//if stored password matches hashed input password, authenticate
//else, indicate that username or password is incorrect 
userController.validateUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const isValidPassword = await bcrypt.compare(password, user.password)
  .catch(err => console.log(err));

  if (isValidPassword) {
    console.log("Great job")
    return next()
  } else {
    console.log("Invalid username or password. try again.")
    return next()
  }
}

module.exports = userController;