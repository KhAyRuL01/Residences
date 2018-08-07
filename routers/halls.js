const express = require('express');
const operation = require('../operation');
const router = express.Router();

router.get('/halls', function(req, res){

    //console.log(req);
    operation.findInf(res, 'residences', 'halls', req.query);
});

router.post('/halls', function(req, res){

    //console.log(req.body);
    if(!req.body._id || !req.body.name || Object.keys(req.body).length>2)
        res.status(500).json('Error. require _id and name keys');
    else{
        operation.insertData(res, 'residences', 'halls', req.body);
    }
});

router.delete('/halls', function(req, res){

    //console.log(req.body);
    operation.deleteData(res, 'residences', 'halls', req.body);
});

router.put('/halls', function(req, res){

    var data = {_id:req.body._id};
    //console.log(req.body);
    operation.updateData(res, 'residences', 'halls', data, req.body);
});

router.post('/data', function(req, res){

    operation.insertData(res, 'residences', 'data', req.body);
});

module.exports = router;