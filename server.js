var express = require('express');
var app = express();
var exphbs = require('express-handlebars')
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
// Routes
var test = require("./routes/api-routes.js");

console.log(test);

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, function() {
  console.log(`Now listening on http://localhost:${PORT}`);
});