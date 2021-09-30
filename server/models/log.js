const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  meals: {
    first: {
      time: String
    },
    second: {
      time: String
    },
    third: {
      time: String
    }
  },
  walks: {
    first: {
      time: String,
      duration: Number
    },
    second: {
      time: String,
      duration: Number
    },
    third: {
      time: String,
      duration: Number
    }
  },
  pet_id: {
    type: Schema.Types.ObjectId,
    ref: 'pet'
  }
});

const Log = mongoose.model('log', logSchema);

module.exports = Log;