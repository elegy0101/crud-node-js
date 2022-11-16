const { Router } = require('express')
const router = new Router({})

const {
    getUser,
    getUsers,
    createUser,
    updateUsers,
    destroyUser
} = require('../controllers/usersControllers')

router.get('/', getUsers)
router.get('/:id', getUser)
router.post ('/', createUser)
router.put('/:id', updateUsers)
router.delete('/:id', destroyUser)

module.exports = router



