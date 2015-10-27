var storage = [];
var msg = require('./message.js'); 
var msgObj = new msg.message();  
   
msgObj.createdAt = "2015";
msgObj.roomname = "Lobby";
msgObj.text = "blah";
msgObj.username = "CB";
msgObj.updatedAt = "2015";
msgObj.objectId = "1csa";  

//storage.push(msgObj);

exports.results = storage;