const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  domain: {
    type: [String],
    default: []
  },
  description: {
    type: String,
    default: ''
  },
  skills: {
    type: [String],
    default: []
  },
  projects: {
    type: [String],
    default: []
  },
  resumePdf: {
    type: String,
    default: ''
  },
  linkedIn: {
    type: String,
    default: ''
  },
  github: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true
  },
  contactMessage: {
    type: String,
    default: ''
  },
  userImage: {
    type: Buffer, 
    contentType: String, 
    default: null
  }
});

const UserForm = mongoose.model('UserForm', userSchema);

module.exports = UserForm;
