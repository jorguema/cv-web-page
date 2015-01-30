/**
 * Created by Jorge on 1/30/2015.
 */
module.exports= function(app, env){
    app.get('/partials/*', function(req, res){
       var asd = req.params.toString();
        res.render('../../public/app/features/'+ req.params[0]);
    });

    app.get('/', function(req, res){
        res.render('index', {environment: env});
    });
};