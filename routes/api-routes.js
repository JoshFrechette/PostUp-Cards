const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../config/database');
const PostUp = require('../models/index');
const base = require('../models/player_base');

//Get PostUp list
// router.get('/', (req, res) =>
//     PostUp.findAll()
//         .then(postup => {
//             console.log(postup);
//             res.sendStatus(200);
//         })
//         .catch(err => console.log(err)));

router.get('/', (req, res) =>
    base.findAll()
        .then(base => {
            console.log(base);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));


// Add a card
router.get('/add', (req, res) => {
    // const data = baseStats;
    const data = {
        player_id:237,
        player_name: "Lebron James",
        player_height:6,
        player_weight:250,
        player_team:"Los Angeles Lakers", 
        player_city: "Los Angeles"
    }

    let = {player_id, player_name, player_height, player_weight,player_team, player_city } = data;

    //insert into table
    player_base.create({
        player_id,
        player_name,
        player_height,
        player_weight,
        player_team,
        player_city
    })
    .then(postup => res.redirect('/api-routes'))
    .catch(err => console.log(err));
});

module.exports = router;