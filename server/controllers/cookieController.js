const cookieParser = require('cookie-parser');


const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  console.log('locals: ', res.locals.user)
  const { _id } = res.locals.user;
  const cookieVal = _id.toString();
  console.log('cookieVal: ', cookieVal)
  res.cookie('codesmith', 'test')
  next()

}

module.exports = cookieController;