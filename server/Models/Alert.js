// models/Alert.js

const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
   ProfileId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Profile"
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['info', 'warning', 'error'],
    default: 'info'
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
