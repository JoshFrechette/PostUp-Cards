var PlayerBase = require("../models/player_base.js");

module.exports = function (app) {
  app.get("/api/player_base", function (req, res) {
    // 1. Add a join to include all of each users's cards
    PlayerBase.player_base.findAll({}).then(function (PlayerBaseplayer_base) {
      res.json(PlayerBaseplayer_base);
    });
  });

  app.get("/api/player_base/:id", function (req, res) {
    // 2; Add a join to include all of the player's stats here
    PlayerBase.player_base.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (PlayerBaseplayer_base) {
      res.json(PlayerBaseplayer_base);
    });
  });

  app.post("/api/player_base", function (playerInfo, res) {
    console.log("anything")
    const data = {
      //Test dummy data
      player_id: 246,
      player_name: "Lebron James",
      player_height: 6,
      player_weight: 230,
      player_team: "Los Angeles Lakers",
      player_city: "Los Angeles"
    }
    // console.log(playerInfo)
    // Insert into table
    PlayerBase.player_base.create({
      player_id,
      player_name,
      player_height,
      player_weight,
      player_team,
      player_city
    })
    .then(function (PlayerBaseplayer_base) {
      res.json(PlayerBaseplayer_base);
    });
  });
}