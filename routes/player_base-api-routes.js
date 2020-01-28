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

  app.post("/api/player_base", function (req, res) {
    PlayerBase.player_base.create(baseStats).then(function (PlayerBaseplayer_base) {
      res.json(PlayerBaseplayer_base);
    });
  });
}