"use strict";
exports.__esModule = true;
var http = require("http");
var express = require("express");
var app = express();
app.post('/', function (req, res, next) {
    res.send('pong!');
});
http.createServer(app).listen(8080, function () {
    console.log('server listening on port 8080');
});
