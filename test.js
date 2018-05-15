var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser);

app.get('/', function(req, res){
    //res.end(JSON.stringify(req.query));
    res.set('hello');
    //res.sendFile('index.html',{root:__dirname});

});

app.post('/hi', function(req, res){
    res.end(JSON.stringify(req.body));
});

app.listen(8888);