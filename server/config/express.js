var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    errorHandler = require('errorhandler'),
    bodyParser = require('body-parser');

module.exports= function(app, config){
    //app.configure(function(){
        // app configuration
        app.set('views', path.join(config.rootPath, '/server/views'));
        app.set('view engine', 'jade');
        //app.use(favicon(__dirname + '/favicon.ico'));
        app.use(logger('combined', {
            skip: function (req, res) { return res.statusCode < 400 }
        }))
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
//        app.use(express.cookieParser());
//        app.use(express.json());
//        app.use(express.urlencoded());
//        app.use(express.methodOverride());
    app.use(favicon(path.join(config.rootPath, '/public/content/images/favicon.ico')));
    app.use(require('less-middleware')(path.join(config.rootPath, '/public')));
        app.use('/bower_components',  express.static((path.join(config.rootPath, '/bower_components'))));
        app.use('/public',express.static(path.join(config.rootPath, '/public')));
        app.use('/vendor',express.static(path.join(config.rootPath, '/public/vendor')));
        app.use('/app',express.static(path.join(config.rootPath, '/public/app')));

        // development only
        if ('development' == app.get('env'))  app.use(errorHandler());
    //});
};