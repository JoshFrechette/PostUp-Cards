var db = require("../models");
var baseStats = require("../Public/assets/js/playerInfo");
var $ = require("jquery");

module.exports = function(app){
    app.get('/login', function(req, res){
        res.render('login', {
            title: 'Express Login'
        });
    });
    app.get('/api/base/', function(req, res){
        console.log(db.playerbase)
        db.playerbase.findAll({})
        
        .then(function(dbplayerbase) {
            console.log(dbplayerbase)
            res.json(dbplayerbase)
        })
        // res.render('create', {
        //     title: 'express create'
        // });
    });
    app.get('/welcome', function(req, res){
        res.render('', {
            title: 'express welcome'
        });
    });
    app.post('/api/base', function(baseStats, res){
        console.log(baseStats[0])
        db.playerbase.create({
            player_id: 246,
            player_name: "Lebron James",
            player_height: 6,
            player_weight: 230,
            player_team: "Los Angeles Lakers",
            player_city: "Los Angeles"
        })
        
        .then(function(dbplayerbase) {
            // console.log(dbplayerbase)
            res.json(dbplayerbase)
        })
        // res.render('create', {
        //     title: 'express create'
        // });
    });
    //other routes..
}
// console.log(`player array: ${baseStats.NBAPlayerInfo()}`);