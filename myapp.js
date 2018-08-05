
var express = require('express');
var fs = require('fs');
var path = require('path');
var myParser = require('body-parser');
var app = express();
var Mongoclient = require('mongodb');
var operation = require('./operation');
var mongoose = require('mongoose');

url = 'mongodb://localhost:27017/';

//mongoose.connect('localhost:3333/residences');

app.use(myParser.urlencoded({extended: false}));
app.use(myParser.json());

app.get('/', function(req, res){
    
    res.send('Welcome');
});


app.get('/residences/halls', function(req, res){

    operation.findInf(res, 'residences', 'halls');
});

app.put('/residences/halls', function(req, res){

    console.log(req.body);
    operation.updateData(res, 'residences', 'halls', req.body);
});

app.post('/residences/halls/', function(req, res){
    var data =req.body;
    console.log(data);
    operation.insertData(res,'residences', 'halls', data);
});

app.delete('/residences/halls', function(req, res){

    var data = req.body;
    operation.deleteData(res, 'residences', 'halls', data);
    console.log(req.body);
});

app.listen(4444);