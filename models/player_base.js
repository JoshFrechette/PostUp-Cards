module.exports = function (sequelize, DataTypes) {
    var Playerbase = sequelize.define("Playerbase", {
        // Giving the Playerbase model a name of type STRING
        player_id: {
            type: DataTypes.INTEGER
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_name: {
            type: DataTypes.STRING
            // allowNull: true,
            // validate: {
            //     len: [1]
            // }
        },
        player_height: {
            type: DataTypes.INTEGER
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_weight: {
            type: DataTypes.INTEGER
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_team: {
            type: DataTypes.STRING
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        player_city: {
            type: DataTypes.STRING
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        img_src: {
            type: DataTypes.STRING
            // allowNull: true,
            // validate: {
            //     len: [1]
            // }
        }
    });
    // Playerbase.associate = function (models) {
    //     // Associating Playerbase with Posts
    //     // When an Playerbase is deleted, also delete any associated Posts
    //     Playerbase.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };

    return Playerbase;
}