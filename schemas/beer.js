//load mongoose via require
var mongoose    = require('mongoose');

//create BeerSchema as a Mongoose Schema
var BeerSchema  = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number
});

//export as default
module.exports = mongoose.model('Beer', BeerSchema);
