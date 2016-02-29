var fs = require("fs"),
http = require("http"),
express = require("express"),
mongoose = require("mongoose"),
app = express(),
path = require('path'),
methodOverride = require('method-override'),
logger = require('morgan'),
bodyParser = require('body-parser');
db = mongoose.connection;

app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'express');

db.on('error', console.error);
db.once('open', function() {
    console.log('Conexão estabelecida...');
});
mongoose.connect('mongodb://127.0.0.1/express-mongodb-boilerplate');
fs.readdirSync(__dirname + '/schemas/').forEach(function (file) {
	if (~file.indexOf('.js')) require(__dirname + '/schemas/' + file);
});
app.use('/', require('./routes'));
app.use(function(err, req, res, next){
    if(req.sendHeaders) return next();
    res.status(500).json({ message : err.message });
});
app.use(function(req, res, next){
	res.status(404).json({ message: 'Página não encontrada' });
});
http.createServer(app).listen(3040);
console.log("Server starter on :3040");
