module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     len: [10]
            // }
        },
        password: {
            type: DataTypes.TEXT,
            // allowNull: false,
            // validate: {
            //     len: [5]
            // }
        }
    });
    return users;
};
  