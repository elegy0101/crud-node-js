const { DataTypes } = require('sequelize')


module.exports = (connection) => {
    const User = connection.define('User', {
        // Model attributes
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        }
    }, {});
    return User
}