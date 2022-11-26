const { getModel } = require('../database')
const User = getModel('User')


const UserService = require('./usersService')

const services = {
    UserService
}

class ServiceFactory {
    static createUserService (){
        return new UserService(User)
    }
}

module.exports = ServiceFactory

