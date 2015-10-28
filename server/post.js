var storage = require('./storage.js');

module.exports.postProcessor = function(req, res){
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

  res.header("Content-Type",  "application/json");
  res.status(201); 
  res.end(JSON.stringify({'status':'success'}));  

}
