let mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  Content: String,
  Sender: String,
  Receiver: String,
  status: String,
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports.messageModel = messageModel;
module.exports.messageSchema = messageSchema;

