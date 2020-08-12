var userModel = require('../../Models/User').userModel;


var postUser = async (request, response) => {
    try {
        var newUser = new userModel(request.body);
        console.log(newUser);
        var result = await newUser.save();
        response.send(result);
    } catch (error) {
      console.log(error);
        response.status(500).send(error);
    }
};

var getAllUsers = async (request, response) => {
    try {
        var result = await userModel.find().exec();
        response.send(result);
    } catch (error) {
      console.log(error);
        response.status(500).send(error);
    }
};

var getUserByID = async (request, response) => {
    try {
        var user = await userModel.findById(request.params.id).exec();
        response.send(user);
    } catch (error) {
      console.log(error);
        response.status(500).send(error);
    }
};

var postUserByEmailAndPassword = async (request, response) => {
    try {
      var user = await userModel
      .find({ email: request.body.email, password: request.body.password }).exec();
      response.send(user);
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  };

  var getUserByEmail = async (request, response) => {
    try {
      var user = await userModel
      .find({ email : request.params.email}).exec();
      response.send(user);
    } catch (error) {
      console.log(error);
      response.status(500).send(error);

    }
  };

  module.exports = {
    postUser: postUser,
    getAllUsers: getAllUsers,
    getUserByID: getUserByID,
    postUserByEmailAndPassword: postUserByEmailAndPassword,
    getUserByEmail: getUserByEmail,
  };