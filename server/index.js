const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const apiRouter = require('./routes/api');
const app = express();

//connect to pet-info database
async function main() {
  await mongoose.connect('mongodb://localhost:27017/pet-info')
  console.log('connected to pet-info database')
}
main().catch(err => console.log(err));

app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));


//load pets to homepage
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


app.use('/api', apiRouter);


//catch-all route handler
app.use((req, res) => res.status(404).send('Page not found'));


//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

//start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;