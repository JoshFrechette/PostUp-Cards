var express = require('express')
var app = express()
var path = require('path');
PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile('index.html');
})

app.get('card-nav', function(req, res) {
  res.sendFile('card_nav.html');
})

app.listen(PORT, function() {
  console.log(`Now listening on http://localhost:${PORT}`);
});