
var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8000;

//For syncing models
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes

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

  require("./routes/deck-api-routes.js")(app);
  // require("./routes/card-api-routes.js")(app);

// Starts the server to begin listening
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });

<<<<<<< HEAD
=======
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + `http://localhost:${PORT}/welcome`);

>>>>>>> master
});

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + `http://localhost:${PORT}/welcome`);

// });
