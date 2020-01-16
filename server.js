var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', exphbs({
  extname: '.handlebars',
  defaultView: 'main',
  layoutsDir: __dirname + 'views/layouts/',
  partialsDir: __dirname + 'views/partials/'
}));
app.set('view engine', '.handlebars');

app.get('/', function(req, res) {
  res.render((__dirname + '/views/index.handlebars'), {
    layout: 'main'})
})

app.listen(PORT, function() {
  console.log(`Now listening on port ${PORT}`);
});