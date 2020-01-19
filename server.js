
// placeholder
var express = require("express");
var path = require("path");
// Set Handlebars.
const exphbs = require("express-handlebars");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
// Routes

app.get("/welcome", function(req, res) {
  res.render(path.join(__dirname, "./views/layouts/welcome"));
});
app.get("/create", function(req, res) {
  res.render(path.join(__dirname, "./views/index"));
});

app.get("/login", function(req, res) {
  res.render(path.join(__dirname, "./views/layouts/login"));
});

app.get("/deckview", function(req, res) {
    res.render(path.join(__dirname, "./views/layouts/Deck"));
  });
  
app.get("/back", function(req, res) {
    res.render(path.join(__dirname, "./views/layouts/Back"));
  });
// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + `http://localhost:${PORT}/welcome`);
  console.log("this is working");
});
