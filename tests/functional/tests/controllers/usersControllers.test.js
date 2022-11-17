const request = require('supertest')
const app = require('../../../../app')
const { seedUser, getUser } = require('../../utils/users')
const { clearDatabase  } = require('../../utils/db')

describe('usersController', () => {
    beforeEach( async () => {
        await clearDatabase()
    })
    describe('updateUser', () => {
        test('It should a return a 404 if the user is not found!', async () => {
                const result = await request(app).put('/api/users/5').send({ name: 'Robin' })
                    .expect(404)
        })
       test('It should update a found user', async () => {
               const user = await seedUser('Batman')
               const name = 'Robin'
               await request(app).put(`/api/users/${user.id}`).send({ name: 'Robin' })
                   .expect(200)

               const updatedUser = await getUser(user.id)
               expect(updatedUser.name).toEqual(name)

       })
    })
})