
const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require("./src/routes/usersRouter");

const app = express()
app.use(bodyParser.json())

app.use('/api/users/', userRoutes)

module.exports = app


