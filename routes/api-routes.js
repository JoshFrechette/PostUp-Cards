const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../config/database');
const PostUp = require('../models/index');
const base = require('../models/player_base');
const models = require('../models');

// app.get("/api/posts", function(req, res) {
//     var query = {};
//     if (req.query.author_id) {
//       query.AuthorId = req.query.author_id;
//     }
//     // 1. Add a join here to include all of the Authors to these posts
//     db.Post.findAll({
//       where: query
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
module.exports = function(app) {

app.post("/api/player_base", function(req, res) {
    const data = {
                player_id:237,
                player_name: "Lebron James",
                player_height:6,
                player_weight:250,
                player_team:"Los Angeles Lakers", 
                player_city: "Los Angeles"
            }
        
            let = {player_id, player_name, player_height, player_weight,player_team, player_city } = data;
            
    base.create({
                player_id,
                player_name,
                player_height,
                player_weight,
                player_team,
                player_city
            }).then(base => res.redirect('/api-routes'))
        })
    }

 


// const players_base = base();

//Get PostUp list
// router.get('/', (req, res) =>
//     PostUp.findAll()
//         .then(postup => {
//             console.log(postup);
//             res.sendStatus(200);
//         })
//         .catch(err => console.log(err)));

// router.get('/', (req, res) =>
//     base.findAll()
//         .then(player_base => {
//             console.log(player_base);
//             res.sendStatus(200);
//         })
//         .catch(err => console.log(err)));


// // Add a card
// router.get('/add', (req, res) => {
//     // const data = baseStats;
//     const data = {
//         player_id:237,
//         player_name: "Lebron James",
//         player_height:6,
//         player_weight:250,
//         player_team:"Los Angeles Lakers", 
//         player_city: "Los Angeles"
//     }

//     let = {player_id, player_name, player_height, player_weight,player_team, player_city } = data;

//     //insert into table
//     player_base.create({
//         player_id,
//         player_name,
//         player_height,
//         player_weight,
//         player_team,
//         player_city
//     })
//     .then(player_base => res.redirect('/api-routes'))
//     .catch(err => console.log(err));
// });

