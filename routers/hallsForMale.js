const express = require('express');
const operation = require('../operation');
const router = express.Router();

router.get('/halls/male', function(req, res){

    operation.findInf(res, 'residences', 'hallsformale', req.query);
});

router.post('/halls/male', function(req, res){

    //console.log(req.body);
    if(!req.body._id || !req.body.name || Object.keys(req.body).length>2)
        res.status(500).json('error. require _id and hall_name keys not more.');
    else{
        operation.insertData(res, 'residences', 'hallsformale', req.body);
    }
});

router.delete('/halls/male', function(req, res){

    //console.log(req.body);
    operation.deleteData(res, 'residences', 'hallsformale', req.body);
});

router.put('/halls/male', function(req, res){

    var data = {_id:req.body._id};
    //console.log(req.body);
    operation.updateData(res, 'residences', 'hallsformale', data, req.body);
});

module.exports = router;