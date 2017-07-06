// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
var resObj = {};
app.get("/api/whoami", function(req, res){
  var ip = req.ips[1];
  var lang = req.headers["accept-language"];
  var sftwre = req.headers["user-agent"];
  resObj["ipadress"] = ip;
  resObj["language"] = lang;
  resObj["software"] = sftwre;
  res.json(resObj);
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
