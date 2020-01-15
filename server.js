
// const express = require("express");
// // const path = require("path");
// const exphbs = require("express-handlebars");
// const app = express();
// const PORT = process.env.PORT || 8000;

//-- vvv PROBLEM AREA vvv -- //
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // app.use(express.static("public"));
// app.set("view engine", "handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
//-- ^^^ PROBLEM AREA ^^^ -- //

// app.get("/", function(req, res) {
//   res.render("./views.index", {title: 'PostUp Cards'});
// });
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + `http://localhost:${PORT}`);
// });

var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;

app.get('/', function(req, res) {
  res.send("Hello World\n")
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + `http://localhost:${PORT}`);
});

//--- THIS WORKS AT LEAST---//
// var http = require('http')

// http.createServer(function (request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"})
//     response.end("Hello World\n")
// }).listen(process.env.PORT)