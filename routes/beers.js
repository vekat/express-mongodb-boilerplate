var router = require('express').Router();
var beers = require('../middlewares/beers');

router.route('/beers').get(beers.getAll).post(beers.postOne);
router.route('/beers/:id').get(beers.getOne).put(beers.putOne).delete(beers.deleteOne);

module.exports = router;
