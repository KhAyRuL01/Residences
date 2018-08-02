
var express = require('express');
var fs = require('fs');
var path = require('path');
var myParser = require('body-parser');
var app = express();
var Mongoclient = require('mongodb');
var operation = require('./operation');

url = 'mongodb://localhost:27017/';

app.use(myParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    // if(req.query.id == 0){
    //    var data = operation.findInf(res,'residences', 'halls');
    //     console.log('data');
    // }

    // else if(req.query.id == 1)
    res.sendFile('index.html',{root:__dirname});
    // else
    //     res.send('undefined query');

});


app.get('/residences/halls', function(req, res){
    operation.findInf(res, 'residences', 'halls');
});
app.post('/residences/halls', function(req, res){
    var data =req.body;
    console.log(data);
    operation.insertData(res,'residences', 'halls', data);
});

app.listen(3333);

function findInf(resp, database, table){
    Mongoclient.connect(url, { useNewUrlParser: true }, function(err, db){
        if(err) {
            resp.send('error');
            throw err;
        }
        dbObject = db.db(database);
        dbObject.collection(table).find({}).toArray(function(err, res){
            if(err){
                resp.send('not found');
                throw err;
            }
            resp.send('found');
            console.log(res);
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