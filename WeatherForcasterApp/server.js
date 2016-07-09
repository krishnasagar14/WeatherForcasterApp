var express = require('express'),
    path = require('path'),
    http = require('http');

var app = express();

//wraping express functions using its middleware functions.
app.use(express.compress());
app.set('port', process.env.PORT || 5888);
//app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
