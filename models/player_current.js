module.exports = function(sequelize, DataTypes) {
    var Playerstats = sequelize.define("Playerstats", {
        player_id: {
            type: DataTypes.INTEGER
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        season: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [4]
            // }
        },
        player_team: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_gp: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_fg: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_ft: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_reb: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_ast: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_stl: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
       player_blk: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_pts: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_avg: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        }
    });
    // player_current.associate = function(models) {
    //     player_current.belongsTo(models.player_base, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //         });
    // };
    return Playerstats;
};