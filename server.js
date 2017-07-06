// server.js
// where your node app starts

// init project
const http = require("http");
const url = require("url");
const dns = require("dns");
var resObj = {};
var app = http.createServer(function(req, res){
  res.writeHead(200, "OK");
  var myURL = url.parse(req.url);
  if(myURL.pathname === "/api/whoami"){
    var headers = req.headers["user-agent"];
    console.log(headers)
    res.end(headers);
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
