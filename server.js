var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");


//Database


var app = express();
var PORT = process.env.PORT || 8000;

// For syncing models
// var models = require("./models/player_base");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware
app.use(express.static("Public"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//PostUp routes (have all api routes bundled later on)
// app.use('/api-routes', require('./routes/api-routes'));
require("./routes/routes")(app);
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

// models.sequelize.sync({ force: true}).then(function() {
//   app.listen(PORT, function() {
//     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   });

// });

var db = require("./models")
db.sequelize.sync().then(function(){
  app.listen(process.env.PORT || PORT, function() {
    console.log("listening on port " + PORT)
  })
})
