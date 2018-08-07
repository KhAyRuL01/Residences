const express = require('express');
const operation = require('../operation');
const router = express.Router();

router.get('/halls/details', function(req, res){

    operation.findInf(res, 'residences', 'hallsDetails', req.query);
});

router.post('/halls/details', function(req, res){

        if(!req.body._id)
            res.status(500).json('required _id field.');
        else
            operation.insertData(res, 'residences', 'hallsDetails', req.body);
});

router.delete('/halls/details', function(req, res){

    //console.log(req.body);
    operation.deleteData(res, 'residences', 'hallsDetails', req.body);
});

router.put('/halls/details', function(req, res){

    var data = {_id:req.body._id};
    
    //console.log(req.body);
    operation.updateData(res, 'residences', 'hallsDetails', data, req.body);
});

module.exports = router;