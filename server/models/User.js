const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: ''
  },

  lastname: {
    type: String,
    default: ''
  },

  email: {
    type: String,
    default: ''
  },

  password: {
    type: String,
    default: ''
  },

  isDeleted: {
    type: Boolean,
    default: false
  },
  
});

module.exports = mongoose.model('User', UserSchema);
