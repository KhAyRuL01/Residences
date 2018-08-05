var MongoClient = require('mongodb');

var url = 'mongodb://localhost:27017/';


function findInf(resp, database, table){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
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
            resp.send(res);
            db.close();
        });
    });
}

function insertData(responce, database, table, data){
    //responce.setHeader('Content-Type', 'text/html');
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            console.log('hi');
            responce.send('Error connecting to database.');
            throw err;
        }
        dbObject = db.db(database);
        dbObject.collection(table).insertOne(data, function(err){
            if(err) {
                console.log('hello');
                responce.send('Error inserting data.');
            }
            db.close();
            responce.send('Inserted');
        });
    });
}

function updateData(responce, database, table, query, data){
   // responce.setHeader('Content-Type', 'text/html');
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            response.send('Error connecting to database.');
        }
        dbObject = db.db(database);
        data = {
            _id:'123',
            name:'labib'
        };
        dbObject.collection(table).updateMany(query, data, function(err){
            if(err) {
                responce.send('Error updating data.');
            }
            db.close();
            responce.send('Updated');
        });
    });
}

    function deleteData(responce, database, table, query){
        //responce.setHeader('Content-Type', 'text/html');
        MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
            if(err) {
                responce.send('Error connecting to database.');
            }
            dbObject = db.db(database);
            dbObject.collection(table).deleteMany(query, function(err){

                if(err) {
                 
                   responce.send('Error deleting data.');
                }

            db.close();
            responce.send('Deleted');
        });
    });
}       

module.exports = {findInf, insertData, updateData, deleteData};