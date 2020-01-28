var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8000;

// For syncing models
var models = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware
app.use(express.static("Public"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//PostUp routes
app.use('/api-routes', require('./routes/api-routes'));

require("./routes/html-routes.js")(app);
// Nav Routes
// app.get("/", function(req, res) {
//   res.render(path.join(__dirname, "./views/layouts/welcome"));
// });

// app.get("/welcome", function(req, res) {
//   res.render(path.join(__dirname, "./views/layouts/welcome"));
// });

// app.get("/create", function(req, res) {
//   res.render(path.join(__dirname, "./views/index"));
// });

// app.get("/login", function(req, res) {
//   res.render(path.join(__dirname, "./views/layouts/login"));
// });

// app.get("/signup", function(req, res) {
//   res.render(path.join(__dirname, "./views/layouts/signup"));
// });

// app.get("/deck", function(req, res) {
//     res.render(path.join(__dirname, "./views/layouts/deck"));
// });
  
// app.get("/back", function(req, res) {
//     res.render(path.join(__dirname, "./views/layouts/Back"));

//   });

  // require("./routes/deck-api-routes.js")(app);
  // require("./routes/card-api-routes.js")(app);

// Starts the server to begin listening

models.sequelize.sync().then(function() {
  app.listen(process.env.PORT || PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });

});

// app.listen(process.env.PORT || PORT)