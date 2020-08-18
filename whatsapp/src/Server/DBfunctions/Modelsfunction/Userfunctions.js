const userModel = require('../../Models/User').userModel;


const postUser = async (request, response) => {
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

const getAllUsers = async (request, response) => {
  try {
    var result = await userModel.find().exec();
    response.send(result);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

const getUserByID = async (request, response) => {
  try {
    var user = await userModel.findById(request.params.id).exec();
    response.send(user);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

const postUserByEmailAndPassword = async (request, response) => {
  try {
    var user = await userModel
      .find({ email: request.body.email, password: request.body.password }).exec();
    response.send(user);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

const getUserByEmail = async (request, response) => {
  try {
    var user = await userModel
      .find({ email: request.params.email }).exec();
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