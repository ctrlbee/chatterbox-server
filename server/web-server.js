var _ = require('underscore');
var storage = require('./storage.js');
var msg = require('./message.js'); 
var http = require('http');
var fs = require('fs');
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
    var resultsObj = {};
    resultsObj.results = storage.results;
    console.log(storage.results); 
    res.send(JSON.stringify(resultsObj)); //might need UTF-8 encoding  
});

app.post('/classes/messages', function(req, res){
  var reqStr = ""; 

  req.on('data', function(chunk){
    reqStr+=chunk; 
  });
  req.on('end', function(){
    var storedData = storage.results; //doens't work when we push directly to storage.results - why???
    var parsedData = JSON.parse(reqStr);
    storedData.push(parsedData);   
    console.log(storedData);        
  });
  //console.log(request); 
  res.writeHead(201, {"Content-Type": "application/json"});
  res.end(JSON.stringify({'status':'success'}));
});


// var server = http.createServer(function (request, response) {

//   // if(request.url==="/index"){
//   //   fs.readFile("../client/test.js", function(error, content){
//   //     response.write(content); 
//   //   });

//   //   fs.readFile("../client/index.html", function(error, content){
//   //     if(!error){
//   //       response.end(content); 
//   //     }
//   //   })
//   // } else if(request.url==="/index2"){
//   //   fs.readFile("../client/index2.html", function(error, content){
//   //     if(!error){
//   //       response.end(content); 
//   //     }
//   //   })
//   // }

// });



// server.listen(port, ip);