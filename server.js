
var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render(path.join(__dirname, "./views/layouts/welcome"));
});

app.get("/welcome", function(req, res) {
  res.render(path.join(__dirname, "./views/layouts/welcome"));
});

app.get("/create", function(req, res) {
  res.render(path.join(__dirname, "./views/index"));
});

app.get("/login", function(req, res) {
  res.render(path.join(__dirname, "./views/layouts/login"));
});

app.get("/signup", function(req, res) {
  res.render(path.join(__dirname, "./views/layouts/signup"));
});

app.get("/deck", function(req, res) {
    res.render(path.join(__dirname, "./views/layouts/deck"));
});
  
app.get("/back", function(req, res) {
    res.render(path.join(__dirname, "./views/layouts/Back"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + `http://localhost:${PORT}/welcome`);
});
