//load mongoose via require
var mongoose    = require('mongoose');

//create BeerSchema as a Mongoose Schema
var BeerSchema  = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, default: 0 }
});

//export as default
module.exports = mongoose.model('Beer', BeerSchema);
