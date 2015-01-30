//var express = require('express');
//var app = express();
//
//app.set('port', (process.env.PORT || 3030));
//app.use(express.static(__dirname + '/public'));
//
//app.get('/', function(request, response) {
//    response.send('Hello World Automatic deploys from GitHub!');
//});
//
//app.listen(app.get('port'), function() {
//    console.log("Node app is running at localhost:" + app.get('port'));
//});

var express = require('express');

var env= process.env.NODE_ENV = process.env.NODE_ENV || 'development';//'development';
var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/routes')(app, env);

app.listen(config.port);
console.log('Express server listening on port ' + config.port);