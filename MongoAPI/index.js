
var mongo = require('./MongoConn')
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());

app.post('/data', async (req, res) => {
  var output = mongo.MongoTestCon().then(result => result)
  console.log("Inside data")
  res.json({ data: await Promise.resolve(output) })
})


app.get('/', (req, res) => {
  res.json({ data: 'Hello From API' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})