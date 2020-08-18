let mongoose = require('mongoose');
let userSchema = require('./User').userSchema;
let messageSchema = require('./Message').messageSchema;

const groupSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Participants: [userSchema],
    Messages: [messageSchema],
  });

const groupModel = mongoose.model('Group', groupSchema);

module.exports.groupModel = groupModel;
module.exports.groupSchema = groupSchema;