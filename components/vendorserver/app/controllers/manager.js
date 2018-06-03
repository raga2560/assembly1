var Manager = require('../models/manager');

exports.getPairs = function(req, res, next){

    Manager.find(function(err, pairs) {

        if (err){
        	res.send(err);
        }

        res.json(pairs);

    });

}

exports.createPair = function(req, res, next){

    Manager.create({
        pairid : 'req.body.title',
        serverdata : 'req.body.description',
        clientdata: 'req.body.rating',
        done : false
    }, function(err, pair) {

        if (err){
        	res.send(err);
        }
       
        Manager.find(function(err, pairs) {

            if (err){
            	res.send(err);
            }
                
            res.json(pairs);

        });

    });

}

exports.deletePair = function(req, res, next){

    Manager.remove({
        _id : req.params.pair_id
    }, function(err, pair) {
        res.json(pair);
    });

}

exports.getPair = function(req, res, next){

    Manager.find({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}

exports.serverInitialise = function(req, res, next){

    Manager.update({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}


exports.clientInitialise = function(req, res, next){

    Manager.update({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}

exports.downloadPair = function(req, res, next){

    Manager.find({
        _id : req.params.pair_id
    }, function(err, pair) {
        if (err){
                res.send(err);
        }
        res.json(pair);
    });
}

