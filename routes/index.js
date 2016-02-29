var router = require('express').Router();

router.route('/').all(function(req, res){
    res.json({
        message: 'Welcome to Express/Mongodb Boilerplate. Enjoy!'
    });
});

module.exports = router;
