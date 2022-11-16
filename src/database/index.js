const { Sequelize, DataTypes } = require('sequelize');

let connection

function getConnection () {
    if(connection) {
        return connection
    }
    connection = new Sequelize('training', 'root', 'admin', {
        host: 'localhost',
        dialect: 'mysql'
    });
    require('./models/usersModel')(connection)
    return connection
}

module.exports = {
    getConnection
}