const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const ConnectDB = (url) => {

    //Create a database named "WhatsApp":
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });

    mongoose.connect(url, { useNewUrlParser: true });

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
    });
};

module.exports.ConnectDB = ConnectDB;