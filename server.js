var express = require('express');
var PORT = process.env.PORT || 8000;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function(req, res) {
  res.send('testing\n');
});

app.listen(PORT, function() {
  console.log(`Now listening on port ${PORT}`);
});