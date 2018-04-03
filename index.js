const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('hello')
  res.send('<h1>Hello DinoWarranty!</h1>')
})

app.post('/warranties', (req, res) => {
  const body = req.body;
  console.log(body)
  res.json()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})