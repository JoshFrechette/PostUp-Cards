//Dependencies
var mysql = require("mysql");
var Sequelize = require("sequelize");
var sequelize = require("../config/database.js");

module.exports = function(sequelize, DataTypes) {
    var playerbase = sequelize.define("playerbase", {
        player_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        player_name: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        player_height: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        player_weight: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        player_team: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        player_city: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        img_src: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });
    // player_base.sync();
    // player_base.associate = function(models) {
        // player_base.hasMany(models.player_current, models.player_avg, {
        //     onDelete: "cascade"
        // });
    // };
    return playerbase;
};