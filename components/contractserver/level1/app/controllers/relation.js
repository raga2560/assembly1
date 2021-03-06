var Relation = require('../models/relation');

exports.getRelations = function(req, res, next){

    Relation.find(function(err, relations) {

        if (err){
        	res.send(err);
        }

        res.json(relations);

    });

}



exports.createRelation = function(req, res, next){
  var length = 10;
  var c1 = {
       vendorid: req.body.vendor_id,
        serverdata: 'has addresses of conractor and vendor ',
        pairid:  Math.random().toString(36).substr(2, length),
        clientdata: 'has addresses of conractor and vendor ',
        pinhash: 'contract.pinhash',
        contractorid: 'contract.contractorid',
        validatorhash: 'contract.validatorhash',

    };

        res.json(c1);
/*
    Relation.create({
        pairid : 'req.body.title',
        serverdata : 'req.body.description',
        clientdata: 'req.body.rating',
        done : false
    }, function(err, pair) {

        if (err){
        	res.send(err);
        }
       
        Relation.find(function(err, relations) {

            if (err){
            	res.send(err);
            }
                
            res.json(relations);

        });

    });
*/
}

exports.deleteRelation = function(req, res, next){

    Relation.remove({
        _id : req.params.pair_id
    }, function(err, pair) {
        res.json(pair);
    });

}

exports.getRelation = function(req, res, next){

    Relation.find({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}

exports.relationPauseActivate = function(req, res, next){

    Relation.update({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}


exports.relationInitialise = function(req, res, next){

    Relation.update({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}

exports.downloadRelation = function(req, res, next){

    Relation.find({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}

