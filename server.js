// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

app.get("/api/whoami", function(req, res){
  req.writeHead(200, "OK");
  
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
