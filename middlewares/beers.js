var mongoose = require('mongoose');
var Beer = require('../schemas/beer.js');

exports.getAll = function(req, res, next){
    var query = Beer.find();
    query.then(function(beers){
        res.json(beers);
    }).catch(next);
};

exports.postOne = function(req, res, next){
    var query = new Beer({
        name: req.body.name,
        type: req.body.type,
        quantity: req.body.quantity
    }).save();
    query.then(function(beer){
        res.json(beer);
    }).catch(next);
};

exports.getOne = function(req, res, next){
    var query = Beer.findById(req.params.id).exec();
    query.then(function(beer){
        if(!beer) throw new Error('Beer not found');
        res.json(beer);
    }).catch(next);
};

exports.putOne = function(req, res, next){
    var query = Beer.findById(req.params.id).exec();
    query.then(function(beer){
        if(!beer) throw new Error('Beer not found');
        beer.name       = req.body.name     || beer.name;
        beer.type       = req.body.type     || beer.type;
        beer.quantity   = req.body.quantity || beer.quantity;
        return beer.save();
    }).then(function(beer){
        res.json(beer);
    }).catch(next);
};

exports.deleteOne = function(req, res, next){
    var query = Beer.findById(req.params.id).exec();
    query.then(function(beer){
        if(!beer) throw new Error('Beer not found');
        return beer.remove();
    }).then(function(beer){
        res.json(beer);
    }).catch(next);
};
