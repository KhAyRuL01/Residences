
var express = require('express');
var fs = require('fs');
var path = require('path');
var myParser = require('body-parser');
var app = express();
var Mongoclient = require('mongodb');

url = 'mongodb://localhost:27017/';

app.use(myParser.urlencoded({extended: true}));

app.get('/residences/halls', function(req, res){
    if(req.query.id == 0){
        var data = findInf(res, 'residences', 'halls');
    }

    else if(req.query.id == 1)
        res.sendFile('index.html',{root:__dirname});
    else
        res.send('undefined query');

});

app.post('/residences/halls', function(req, res){
    var data =req.body;
    console.log(data);
    insertData(res, 'residences', 'halls', data);
});

app.listen(7777);

function findInf(resp, database, table){
    Mongoclient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            resp.send('error');
        }
        dbObject = db.db(database);
        dbObject.collection(table).find({}).toArray(function(err, res){
            resp.send(JSON.stringify(res));
            db.close();
        });
    });
}

function insertData(resp, database, table, data){
    Mongoclient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            resp.send('Error connecting to database');
            throw err;
        }
        dbObject = db.db(database);
        dbObject.collection(table).insertOne(data, function(err){
            if(err) {
                resp.send('Error inserting to data');
                throw err;
            }
            resp.send('inserted');
            db.close();
        });
    });
}