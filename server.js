
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.get("/", function(req, res) {
  res.render(path.join(__dirname, "/views.index"), {title: 'PostUp Cards'});
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + `http://localhost:${PORT}`);
});
