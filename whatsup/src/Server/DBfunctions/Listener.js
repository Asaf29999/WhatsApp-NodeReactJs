const User = require('./Modelsfunction/Userfunctions');
const Group = require('./Modelsfunction/Groupfunction');
const Message = require('./Modelsfunction/Messagefunction');



var user = [
    {
        Type: 'post',
        Url: "/user",
        Func: User.postUser
    },

    {
        Type: 'get',
        Url: "/user/all",
        Func: User.getAllUsers
    },

    {
        Type: 'get',
        Url: "/man/:id",
        Func: User.getUserByID
    },

    {
        Type: 'post',
        Url: "/user/login",
        Func: User.postUserByEmailAndPassword
    },

    {
        Type: 'get',
        Url: "/user/email/:email",
        Func: User.getUserByEmail
    },
];

var group = [
];
var message = [
];

module.exports = user;