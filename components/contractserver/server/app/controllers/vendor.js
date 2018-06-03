var Vendor = require('../models/vendor');

exports.getVendors = function(req, res, next){

    Vendor.find(function(err, vendors) {

        if (err){
        	res.send(err);
        }

        res.json(vendors);

    });

}

exports.createVendor = function(req, res, next){

    Vendor.create({
        vendorid : 'req.body.title',
        serverdata : 'req.body.description',
        clientdata: 'req.body.rating',
        done : false
    }, function(err, vendor) {

        if (err){
        	res.send(err);
        }
       
        Vendor.find(function(err, vendors) {

            if (err){
            	res.send(err);
            }
                
            res.json(vendors);

        });

    });

}

exports.deleteVendor = function(req, res, next){

    Vendor.remove({
        _id : req.params.vendor_id
    }, function(err, vendor) {
        res.json(vendor);
    });

}

exports.getVendor = function(req, res, next){

    Vendor.find({
        _id : req.params.vendor_id
    }, function(err, vendor) {
        if (err){
                res.send(err);
        }
        res.json(vendor);
    });
}

exports.vendorPause = function(req, res, next){

    Vendor.update({
        _id : req.params.vendor_id
    }, function(err, vendor) {
        if (err){
                res.send(err);
        }
        res.json(vendor);
    });
}


exports.vendorInitialise = function(req, res, next){

    Vendor.update({
        _id : req.params.vendor_id
    }, function(err, vendor) {
        if (err){
                res.send(err);
        }
        res.json(vendor);
    });
}

exports.downloadVendor = function(req, res, next){

    Vendor.find({
        _id : req.params.vendor_id
    }, function(err, vendor) {
        if (err){
                res.send(err);
        }
        res.json(vendor);
    });
}

