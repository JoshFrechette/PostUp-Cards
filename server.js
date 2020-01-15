var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({
  extname: 'handlebars', 
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: [path.join(__dirname, 'views/partials'),
  ]
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index.handlebars');
})

app.listen(PORT);