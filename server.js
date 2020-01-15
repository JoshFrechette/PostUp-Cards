
//-- vvv PROBLEM AREA vvv -- //
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));
// app.set("view engine", "handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
//-- ^^^ PROBLEM AREA ^^^ -- //

var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(PORT);