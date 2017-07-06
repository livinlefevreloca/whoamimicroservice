// server.js
// where your node app starts

// init project
var http = require("http");
var app = http.createServer(function(req, res){
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
