var db = require("../models");
var passport = require('../config/passport-config')


module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

    // app.get("/api/users", function (req, res) {
  //   // 1. Add a join to include all of each users's cards
  //   db.users.findAll({}).then(function (dbusers) {
  //     res.json(dbusers);
  //   });
  // });
  //Passport Authentication
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.post("/api/users", function (req, res) {
    console.log(req.body.email)
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // app.get("/api/users/:id", function (req, res) {
  //   // 2; Add a join to include all of the users's cards here
  //   db.users.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbusers) {
  //     res.json(dbusers);
  //   });
  // });

  //Create a username and password for people signing up
  // app.post("/api/users", function (req, res) {
  //   db.users.create({
  //     email: req.body.username,
  //     password: req.body.password
  //   })
  // });

  // app.get("/api/users", function (req, res) {
  //   console.log("login routing")
  //   passport.use(new LocalStrategy(
  //     function (req, res, done) {
  //       console.log(req.body.username, req.body.password)
  //       db.users.findOne({ name: req.body.username }, function (err, user) {
  //         if (err) { return done(err); }
  //         if (!user) {
  //           return done(null, false, { message: 'Incorrect username.' });
  //         }
  //         if (!user.validPassword({ password: req.body.password })) {
  //           return done(null, false, { message: 'Incorrect password.' });
  //         }
  //         console.log("login succes")
  //         return done(null, user);

  //       });
  //     }
  //   ))
  // });

  //Card related 
  app.get("/api/playerbase", function (req, res) {
    db.Playerbase.findAll().then(function (results) {
      res.json(results);
    })
  });
  app.get("/api/playerstats", function (req, res) {
    db.Playerstats.findAll().then(function (results) {
      res.json(results);
    })
  });

  // work in progress, route to get individual card data from deckcard/deckview click event => need to have route identify by id
  app.get("/api/playerbase/:id", function (req, res) {
    var id = req.params.id
    // console.log("this id " + id)
    db.Playerbase.findOne({
      where: {
        player_id: id
      }
    }).then(function (results) {
      res.json(results);
    })
  });

  app.get("/api/playerstats/:id", function (req, res) {
    var id = req.params.id
    db.Playerstats.findOne({
      where: {
        player_id: id
      }
    }).then(function (results) {
      res.json(results);
    })
  });

  // Get all the card data (name only, really, to present in deckview)
  app.get("/api/all", function (req, res) {
    db.Playerbase.findAll().then(function (results) {
      res.json(results);
    })
  })

  //add a new card
  app.post("/api/new", function (req, res) {
    // Insert into table
    db.Playerbase.create({
      player_id: req.body.playerID,
      player_name: req.body.playerName,
      player_pos: req.body.playerPos,
      player_height: req.body.playerHeight,
      player_weight: req.body.playerWeight,
      player_team: req.body.playerTeam,
      player_city: req.body.playerCity,
      img_src: req.body.playerGIF,
    }),
      db.Playerstats.create({
        player_id: req.body.playerID,
        season: req.body.playerStatsSeason,
        player_team: req.body.playerStatsTeam,
        player_gp: req.body.playerGP,
        player_fg: req.body.playerFGPer,
        player_ft: req.body.playerFTPer,
        player_reb: req.body.playerReb,
        player_ast: req.body.playerAst,
        player_stl: req.body.playerStl,
        player_blk: req.body.playerBlk,
        player_pts: req.body.playerPts,
        player_avg: req.body.playerAvg,
      })
        // .then(function (PlayerBase) {
        //   res.json(PlayerBase);
        // });
        .then(function (res) {
          res.end();
        })

  });

  app.post("/api/playerbase/:id", function (req, res) {
    console.log(res.params.id)

    db.Playerbase.findOne(req.params.id).then(
      (response) => {
        res.json({ successful: response });
      }
    ).catch(
      (err) => {
        rres.json({ error: err });
      }
    )
  });
  //other routes..
}


