const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { join } = require('node:path')
const app = express()
const port = 3000

// These are global middlewares
// https://expressjs.com/en/guide/using-middleware.html
app.use(cors())
// https://www.npmjs.com/package/body-parser#bodyparserjsonoptions
app.use(bodyParser.json())
app.use('/static', express.static(join(__dirname, '../public')))

const db = [
  { name: 'Kevin Humberto Avila Heredia', phone: '+4915734545112' },
  { name: 'Carolina Rivera', phone: '+4915734545111' },
  { name: 'Ilknur Manav', phone: '+4915734545110' },
];

app.get('/', (req, res) => {
  res.json(db)
})

app.post('/', (req, res) => {
  db.push(req.body)
  res.status(201).json({ message: 'ok'})
})

// app.put(...)         // 
// app.delete(...)      //

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
