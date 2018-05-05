const express = require('express');
const app = express();
const Mongoclient = require('mongodb');
url = 'mongodb://localhost:27017/';

app.get('/khayrul', function(req,res){
    res.set('Content-Type','text/plain');
    var s = 'khayrul';
    res.send(s);
});

app.get('/residences/halls', function(req,res){
    res.set('Content-Type','text/html');
    Mongoclient.connect(url, function(err, db){
        if(err) throw err;
        dbo = db.db('residences');
        dbo.collection('halls').find({}).toArray(function(err, resd){
            res.send(resd);
            res.end();
        });
        db.close();
    });
});

app.listen(8888);