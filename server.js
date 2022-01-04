require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Use req.ip for the IP address
// Use req.get() to get the necessary request header field
app.get('/api/whoami', function(req,res){
  console.log(req.ip, req.get('user-agent'), req.get('accept-language'));
  let respObj = {
    ipaddress: req.ip,
    language: req.get('accept-language'),
    software: req.get('user-agent')
  }
  res.json(respObj);
})


// listen for requests :)
//use process.env.PORT for port
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
