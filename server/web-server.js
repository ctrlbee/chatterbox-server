var _ = require('underscore');
var storage = require('./storage.js');
var msg = require('./message.js'); 
var http = require('http');
var fs = require('fs');
var url = require('url'); 
var get = require('./get.js'); 
var post = require('./post.js'); 
var express = require('express'); 
var app = express(); 

var port = 8080; 
var ip = "127.0.0.1";

app.use(express.static('../client'));

app.listen(port);

app.use(function(req, res, next){
  res.header("access-control-allow-origin", "*"); 
  res.header("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("access-control-allow-headers", "content-type, accept");
  res.header("access-control-max-age", 10); 
  next(); 
});

app.get('/classes/messages', function(req, res){
  get.getProcessor(req, res);
});

app.post('/classes/messages', function(req, res){
  post.postProcessor(req, res); 
});

app.options('/classes/messages', function(req, res){
  console.log('options'); 
})