const cors = require('cors');
const Express = require('express');
const BodyParser = require('body-parser');

const listener = require('./DBfunctions/Listener');
const ConnectDB = require('./DBfunctions/DBconnection').ConnectDB;

require('dotenv').config()

const hostname = process.env.HOST;
const port = process.env.PORT;
const url = process.env.URL;

ConnectDB(url);

const app = Express();

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

listener.forEach(option => {
  app[option.Type](option.Url, option.Func);
});

app.listen(port, () => {
  console.log(`Listening at :${port}...`);
});

