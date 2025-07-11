const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  achievements: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Education', educationSchema); 