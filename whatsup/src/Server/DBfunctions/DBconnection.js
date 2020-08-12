var MongoClient = require('mongodb').MongoClient;


const ConnectDB = () => {

    //Create a database named "WhatsApp":
    var url = "mongodb://localhost:27017/WhatsApp";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });


    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/WhatsApp', { useNewUrlParser: true });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
    });
};

module.exports.ConnectDB = ConnectDB;



