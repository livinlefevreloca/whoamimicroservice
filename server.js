// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
var resObj = {};
app.get("/api/whoami", function(req, res){
  var ip = req.headers['x-forwarded-for'].split(",")[0];
  var lang = req.headers["accept-language"].split(",")[0];
  var sftwre = req.headers["user-agent"].match(/\([^)]*\)/g)[0];
  resObj["ipadress"] = ip;
  resObj["language"] = lang;
  resObj["software"] = sftwre;
  res.json(resObj);
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
