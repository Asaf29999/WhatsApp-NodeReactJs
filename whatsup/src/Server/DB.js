const ConnectDB = require('./DBfunctions/DBconnection').ConnectDB;
const listener = require('./DBfunctions/Listener');

ConnectDB();

const Express = require("express");
var cors = require('cors');
const BodyParser = require("body-parser");

var app = Express();

// app.use(cors()); 

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

listener.forEach(option => {
  app[option.Type](option.Url, option.Func);
});

app.listen(3001, () => {
  console.log("Listening at :3001...");
});

