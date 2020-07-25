//Dependencies
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render(path.join(__dirname, "../views/layouts/welcome"));
    });

    // app.get("/welcome", function (req, res) {
    //     res.render(path.join(__dirname, "../views/layouts/welcome"));
    // });

    app.get("/create", function (req, res) {
        res.render(path.join(__dirname, "../views/index"));
    });

    app.get("/signinpage", function (req, res) {
        res.render(path.join(__dirname, "../views/layouts/signin"));
    });

    app.get("/signuppage", function (req, res) {
        res.render(path.join(__dirname, "../views/layouts/signup"));
    });

    app.get("/deck", function (req, res) {
        res.render(path.join(__dirname, "../views/layouts/Deck"));
    });

    app.get("/back", function (req, res) {
        res.render(path.join(__dirname, "../views/layouts/Back"));

    });
};
