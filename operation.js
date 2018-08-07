const MongoClient = require('mongodb');

const url = 'mongodb://localhost:27017/';


function findInf(resp, database, table, query){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            resp.send('error');
        }
        dbObject = db.db(database);
        console.log(query);
        dbObject.collection(table).find(query).toArray(function(err, res){
            if(err){
                resp.send('not found');
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
            responce.send('Error connecting to database.');
        }
        dbObject = db.db(database);
        dbObject.collection(table).insertOne(data, function(err){
            if(err) {
                responce.send('Error inserting data.');
            }
            db.close();
            responce.send('Inserted');
        });
    });
}

function updateData(responce, database, table, query,data){
   // responce.setHeader('Content-Type', 'text/html');
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            response.status(200).json('Error connecting to database.');
        }
        dbObject = db.db(database);
        console.log(query);
        dbObject.collection(table).update(query, data, function(err){
            if(err) {
                responce.status(200).json('Error updating data.');
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