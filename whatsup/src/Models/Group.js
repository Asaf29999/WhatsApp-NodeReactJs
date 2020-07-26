var mongoose = require('mongoose');
var userSchema = require('./User').userSchema;
var messageSchema = require('./Message').messageSchema;

const groupSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Participants: [userSchema],
    Messages: [messageSchema],
  });

const groupModel = mongoose.model('Group', groupSchema);

module.exports.groupModel = groupModel;
module.exports.groupSchema = groupSchema;