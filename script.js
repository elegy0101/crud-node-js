
const { blue } = require('chalk')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
const port = 3000

function home (req, res) {
    res.send('Welcome to my app!')
}

function getUsers (req, res) {
    console.log(req)
    res.json([])
}

function getUser (req, res) {
    res.json({})
}

function createUser (req, res) {
    res.json({ id: 1})
}

function updateUsers (req, res) {
    console.log(req)
    res.json({ id: 1, name: 'user updated'})
}

function destroyUser (req, res) {
    res.json(1)
}

app.get('/', home)
app.get('/users', getUsers)
app.get('/users/:id', getUser)
app.post ('/users', createUser)
app.put('/users/:id', updateUsers)
app.delete('/users/:id', destroyUser)

app.listen(port, () => {
    console.log(blue(`Example app listening on port ${port}`))
})