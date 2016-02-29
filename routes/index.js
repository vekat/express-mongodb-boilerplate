var router = require('express').Router();
var beers = require('./beers');

router.route('/').get(function(req, res){
    res.json({
        message: 'Welcome to Express/Mongodb Boilerplate. Enjoy!'
    });
});

router.use(beers);

module.exports = router;
