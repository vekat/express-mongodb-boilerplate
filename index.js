var fs = require('fs'),
  http = require('http'),
  express = require('express'),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

mongoose.Promise = require('bluebird');

// obtendo conexao com o banco e capturando eventos
var db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {
  console.log('Conexão estabelecida...');
});

// ponto inicial de aplicacoes express: http://goo.gl/j4K9yt
var app = express();

// montagem de middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));

// middlewares de tratamento de erro
app.use(function(req, res, next) {
  res.status(404).json({ message: 'Página não encontrada' });
});

app.use(function(err, req, res, next) {
  if (res.headersSent) return next(err);
  res.status(500).json({ message: err.message });
});

// conexao com o banco
mongoose.connect('mongodb://127.0.0.1/express-mongodb-boilerplate');

// iniciando servidor
http.createServer(app).listen(3040);

console.log('Servidor ouvindo em http://localhost:3040');
