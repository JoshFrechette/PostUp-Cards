// var db = require("../models"); // Need more precise models?
var PlayerBase = require("../models/player_base.js");
// var $ = require("jquery");

module.exports = function(app){
    app.get('/login', function(req, res){
        res.render('login', {
            title: 'Express Login'
        });
    });
    // app.get('/api/base/', function(req, res){
    //     console.log(db.playerbase)
    //     db.playerbase.findAll({})
        
    //     .then(function(dbplayerbase) {
    //         console.log(dbplayerbase)
    //         res.json(dbplayerbase)
    //     })
        // res.render('create', {
        //     title: 'express create'
        // });
    // });
    app.get('/welcome', function(req, res){
        res.render('', {
            title: 'express welcome'
        });
    });

    app.get("/api/all", function(req, res) {
        player_bases.findAll({}).then(function(results) {
            res.json(results);
        })
    })
    //add a new card
    app.post("/api/new", function(req, res) {
        console.log("body from front end")
        console.log(req.body)

        // Insert into table
        PlayerBase.create({
          player_id: req.body.playerID,
          player_name: req.body.playerName,
          player_height: req.body.playerHeight,
          player_weight: req.body.playerWeight,
          player_team: req.body.playerTeam,
          player_city: req.body.playerCity,
          img_src: req.body.playerGIF,
        })
        // .then(function (PlayerBase) {
        //   res.json(PlayerBase);
        // });
        .then(function(results) {
            res.end();
        })

      });
    //other routes..
}
