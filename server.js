var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");
var passport = require('passport');

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

//Passport Authentication
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

//PostUp routes (have all api routes bundled later on)

require("./controller/routes")(app);
require("./controller/html-routes.js")(app);

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
