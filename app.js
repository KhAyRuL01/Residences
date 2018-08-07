
const express = require('express');
const fs = require('fs');
const path = require('path');
const myParser = require('body-parser');
const app = express();
const halls = require('./routers/halls');
const hallsForMale = require('./routers/hallsForMale');
const hallsForFemale = require('./routers/hallsForFemale');
const hallsDetails = require('./routers/hallsDetails');
const port = process.env.PORT || 3333;


url = 'mongodb://localhost:27017/';

//mongoose.connect('localhost:3333/residences');

app.use(myParser.urlencoded({extended: false}));
app.use(myParser.json());

app.use('/residences', halls);

app.use('/residences', hallsDetails);
app.use('/residences', hallsForMale);
app.use('/residences', hallsForFemale);

app.use((req, res, next)=>{

    const error = new Error('Not found');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

process.on("uncaughtException", (err)=>{
    console.log(err);
});
app.listen(port);
console.log('Server running on port: '+port);