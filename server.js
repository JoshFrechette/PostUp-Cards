var express = require('express');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars')
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars')

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, function() {
  console.log(`Now listening on http://localhost:${PORT}`);
});