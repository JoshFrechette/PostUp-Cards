var db = require("../models");

module.exports = function(app) {
  app.get("/api/player_base", function(req, res) {
    // 1. Add a join to include all of each users's cards
    db.player_base.findAll({}).then(function(dbplayer_base) {
      res.json(dbplayer_base);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // 2; Add a join to include all of the player's stats here
    db.player_base.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbplayer_base) {
      res.json(dbplayer_base);
    });
  });

  app.post("/api/player_base", function(req, res) {
    db.player_base.create(baseStats).then(function(dbplayer_base) {
      res.json(dbplayer_base);
    });
  });




// const fetch = require("node-fetch");
// const Request = require("request");
// function NBAPlayerInfo(){

// //     fetch('https://balldontlie.io/api/v1/players?search=Kawhi Leonard')
// //   .then(response => response.json())
// //   .then(data => console.log(data))

// Request.get("https://balldontlie.io/api/v1/players?search=Kawhi Leonard",
//  (error, response, body) => {   
// if(error) {
//         return console.dir(error);
//     }
//     //$("#card").append("<div class=col id=civicFeedLinks><H5>Links from Civic Feed API</H5></div>");
//     console.dir("Players id: " + JSON.parse(body).data[0].id);
//     console.dir("Players name: " + JSON.parse(body).data[0].first_name + " " + JSON.parse(body).data[0].last_name );
//     console.dir("Players height: " + JSON.parse(body).data[0].height_feet + "ft");
//     console.dir("Players weight: " + JSON.parse(body).data[0].weight_pounds + "lbs");
//     console.dir(JSON.parse(body).data[0].team.city);
//     console.dir(JSON.parse(body).data[0].team.full_name);

// });
// }



// module.exports = NBAPlayerInfo();


// module.exports = NBAPlayerInfo();

