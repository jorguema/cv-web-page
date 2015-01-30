var path= require('path');
var rootPath= path.normalize(__dirname + '/../..');

module.exports={
    development:{
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    staging:{
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};