var express = require('express');

var env= process.env.NODE_ENV = process.env.NODE_ENV || 'production';//'development';
var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/routes')(app, env);

app.listen(config.port);
console.log('Express server listening on port ' + config.port);