var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  groups: [String]
});

const userModel = mongoose.model('User', userSchema);

module.exports.userModel = userModel;
module.exports.userSchema = userSchema;