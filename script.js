
const { getConnection } = require('./src/database/')
const app = require('./app')
const port = 3000

app.listen(port, async () => {
    const { connection } = getConnection()
    await connection.sync({})
    console.log(`Example app listening on port ${port}`)
})