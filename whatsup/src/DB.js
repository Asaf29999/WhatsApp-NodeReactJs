const userModel = require('./Models/User').userModel;
const messageModel = require('./Models/Message').messageModel;
const groupModel = require('./Models/Group').groupModel;


var MongoClient = require('mongodb').MongoClient;



//Create a database named "WhatsApp":
var url = "mongodb://localhost:27017/WhatsApp";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


//create collection
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("Hafifa2");
//   dbo.createCollection("Clubs", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/WhatsApp', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

const Express = require("express");
var cors = require('cors')
const BodyParser = require("body-parser");

var app = Express();

app.use(cors());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.post("/user", async (request, response) => {
  try {
   // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    var newUser = new userModel(request.body);
    console.log(newUser);
    var result = await newUser.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/user/all", async (request, response) => {
  try {
    var result = await userModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/user/:id", async (request, response) => {
  try {
    var user = await userModel.findById(request.params.id).exec();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/user/:name", async (request, response) => {
  try {
    var user = await userModel.find((user) => {
      if (user.firstName == request.params.name) {
        return user;
      }
    });
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/signed/user/:id", async (request, response) => {
  try {
    var user = await userModel.findById(request.params.id).exec();
    response.send(user.Groups);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/signed/user/:id/:groupid", async (request, response) => {
  try {
    var user = await userModel.findById(request.params.id).exec();
    var currentGroup = user.Groups.find((group) => {
      if (group.id == request.params.groupid)
        return group;
    })
    response.send(currentGroup);
  } catch (error) {
    response.status(500).send(error);
  }
});




//app.put("/men/:name", async (request, response) => { });


// app.post("/club", async (request, response) => {
//   try {
//     var club = new ClubModel(request.body);
//     var result = await club.save();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get("/club", async (request, response) => {
//   try {
//     var result = await ClubModel.find().exec();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// app.get("/club/best", async (request, response) => {
//   try {
//     var clubList = await ClubModel.find().exec();
//     let womenAvgs = [];
//     clubList.forEach(club => womenAvgs.push(club.women.reduce((total, next) => total + next.cool, 0) / club.women.length));
//     response.send( `The best club is : ${clubList[womenAvgs.indexOf(Math.max(...womenAvgs))].name}`);

//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// app.get("/club/:id", async (request, response) => {
//   try {
//     var club = await ClubModel.findById(request.params.id).exec();
//     response.send(club);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


// var deleter = (value, array) => {
//   const index = array.indexOf(value);
//   if (index > -1) {
//     array.splice(index, 1);
//     console.log(array);

//     return array;
//   }
// }

app.listen(3001, () => {
  console.log("Listening at :3001...");
});