// config/express.js
var express = require('express');

module.exports = function () {
    var app = express();
    
    //Configura a porta a ser utilizada
    app.set('port', 3000);
    
    //Configura pasta com os arquivos estaticos
    app.use(express.static('./public'));
    
    return app;
}