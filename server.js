
//-- vvv PROBLEM AREA vvv -- //
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));
// app.set("view engine", "handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
//-- ^^^ PROBLEM AREA ^^^ -- //

// app.get("/", function(req, res) {
//   res.render("./views.index", {title: 'PostUp Cards'});
// });

var express = require('express');
var exphbs = require('express-handlebars')
var path = require("path")
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'exphbs');
app.engine('exphbs', exphbs({
  defaultLayout: "main"
}))

app.get('/', function(req, res) {
  res.render(path.join(__dirname, 'index'), {layout: 'main'})
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + `http://localhost:${PORT}`);
});