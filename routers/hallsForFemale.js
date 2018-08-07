const express = require('express');
const operation = require('../operation');
const router = express.Router();

router.get('/halls/female', function(req, res){

    operation.findInf(res, 'residences', 'hallsforfemale', req.query);
});

router.post('/halls/female', function(req, res){

    //console.log(req.body);
    if(!req.body._id || !req.body.name || Object.keys(req.body).length>2)
        res.send('error. require _id and hall_name keys not more.');
    else{
        operation.insertData(res, 'residences', 'hallsforfemale', req.body);
    }
});

router.delete('/halls/female', function(req, res){

    //console.log(req.body);
    operation.deleteData(res, 'residences', 'hallsforfemale', req.body);
});

router.put('/halls/female', function(req, res){

    var data = {_id:req.body._id};
    //console.log(req.body);
    operation.updateData(res, 'residences', 'hallsforfemale', data, req.body);
});

module.exports = router;