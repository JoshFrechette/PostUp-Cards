var db = require("../models");

module.exports = function (app) {
    //For user login
    app.get('/login', function (req, res) {
        res.render('login', {
            title: 'Express Login'
        });
    });

    // res.render('create', {
    //     title: 'express create'
    // });
    // });
    // app.get('/welcome', function (req, res) {
    //     res.render('', {
    //         title: 'express welcome'
    //     });
    // });

    app.get("/api/playerbase", function(req, res){
        db.Playerbase.findAll().then(function(results) {
            res.json(results);
        })
    });

    // work inprogress, route to get individual card data from deckcard/deckview click event => need to have route identify by id
    app.get("/api/playerbase/:id", function(req, res) {
        var id = req.params.id
        console.log("this id " + id)
        db.Playerbase.findOne({
            where: {
                id: id
            }
        }).then(function(results) {
            res.json(results);
        })
    });

    // Get all the card data (name only, really, to present in deckview)
    app.get("/api/all", function (req, res) {
        db.Playerbase.findAll().then(function(results) {
            res.json(results);
        })
    })

    //add a new card
    app.post("/api/new", function (req, res) {
        console.log("body from front end")
        console.log(req.body)

        // Insert into table
        db.Playerbase.create({
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
            .then(function (results) {
                res.end();
            })

    });
    //other routes..
}


