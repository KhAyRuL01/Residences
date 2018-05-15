var MongoClient = require('mongodb');

var url = 'mongodb://localhost:27017/';

function findInf(database, table){
    Mongoclient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            res.send('Error connecting to database');
            throw err;
        }
        dbObject = db.db(database);
        dbObject.collection(table).find({}).toArray(function(err, res){
            db.close();
            return res;
        });
    });
}

function insertData(database, table, data){
    Mongoclient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            res.send('Error connecting to database');
            throw err;
        }
        dbObject = db.db(database);
        dbObject.collection(table).insertOne(data, function(err){
            if(err) {
                res.send('Error inserting to data');
                throw err;
            }
            res.send('inserted');
            db.close();
        });
    });
}