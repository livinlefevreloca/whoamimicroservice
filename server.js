// server.js
// where your node app starts

// init project
const http = require("http");
const url = require("url");

var app = http.createServer(function(req, res){
  var myURL = url.parse(req.url);
  if(myURL.pathname === "/api/whoami"){
    
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
