var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    groups: [String]
  });

const userModel = mongoose.model('User', userSchema);

module.exports.userModel = userModel;
module.exports.userSchema = userSchema;