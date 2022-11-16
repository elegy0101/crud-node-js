
const { blue } = require('chalk')
const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/usersRouter')
const { getConnection } = require('./src/database/')
const app = express()
app.use(bodyParser.json())
const port = 3000

app.use('/api/users/', userRoutes)

app.listen(port, async () => {
    const connection = getConnection()
    await connection.sync({})
    console.log(blue(`Example app listening on port ${port}`))
})