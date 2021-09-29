const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true
  },
  age: Number,
  weight: Number,
  care_info: {
    feeding_schedule: String,
    exercise: String,
    potty_breaks: String,
    additional_info: String
  }
});

const Pet = mongoose.model('pet', petSchema);

module.exports = Pet;