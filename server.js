var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require('./config/passport-config');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware
app.use(express.static("Public"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//PostUp routes (have all api routes bundled later on)
require("./controller/routes")(app);
require("./controller/html-routes.js")(app);

// Starts the server to begin listening
var db = require("./models")
db.sequelize.sync().then(function(){
  app.listen(process.env.PORT || PORT, function() {
    console.log("listening on port " + PORT)
  })
})
