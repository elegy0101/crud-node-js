
const { getModel } = require('../../../src/database')
const User = getModel('User')

function seedUser(name = 'Batman', email = 'bat@gmail.com') {
    return User.create({
        name,
        email
    })
}

function getUser(id) {
    return User.findByPk(id)
}

module.exports = {
    seedUser,
    getUser
}