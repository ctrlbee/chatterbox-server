var storage = require('./storage.js');

module.exports.getProcessor = function(req, res){
    var resultsObj = {};
    resultsObj.results = storage.results;

    res.header("Content-Type",  "application/json");
    res.status(200); 
    res.send(JSON.stringify(resultsObj)); //might need UTF-8 encoding 
} 