const MongoClient = require('mongodb');

const url = 'mongodb://localhost:27017/';
//const url = "mongodb://kay:MongoDbzero@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin";


function findInf(resp, database, table, query){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){

        if(err) {
            resp.status(500).json('Error connecting to database');
        }
        dbObject = db.db(database);
        //console.log(query);
        dbObject.collection(table).find(query).toArray(function(err, res){
            if(err){
                resp.status(500).json('Data not found');
            }
            resp.status(200).json(res);
            db.close();
        });
    });
}

function insertData(responce, database, table, data){
    //responce.setHeader('Content-Type', 'text/html');
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            responce.status(500).json('Error connecting to database.');
        }
        dbObject = db.db(database);
        dbObject.collection(table).insertOne(data, function(err){
            if(err) {
                responce.status(500).json('Error inserting data.');
            }
            db.close();
            responce.status(200).json('Inserted');
        });
    });
}

function updateData(responce, database, table, query,data){
   // responce.setHeader('Content-Type', 'text/html');
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            response.status(500).json('Error connecting to database.');
        }
        dbObject = db.db(database);
        //console.log(query);
        dbObject.collection(table).findOneAndUpdate(query, {$set:data}, function(err){
            if(err) {
                responce.status(500).json('Error updating data.');
            }
            db.close();
            responce.status(200).json('Updated');
        });
    });
}

    function deleteData(responce, database, table, query){
        //responce.setHeader('Content-Type', 'text/html');
        MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
            if(err) {
                responce.status(500).json('Error connecting to database.');
            }
            dbObject = db.db(database);
            dbObject.collection(table).deleteMany(query, function(err){

                if(err) {
                   responce.status(500).json('Error deleting data.');
                }

            db.close();
            responce.status(200).json('Deleted');
        });
    });
}   


module.exports = {findInf, insertData, updateData, deleteData};