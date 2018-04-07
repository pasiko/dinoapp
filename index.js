const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

app.post('/warranties', (req, res) => {

  // DB Test
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize('dinowarranty', 'dinowarranty', 'dinowarranty', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const body = req.body;
  console.log(body)

  const vision = require('@google-cloud/vision');
  const client = new vision.ImageAnnotatorClient();

  client
    .documentTextDetection("receipt.jpg")
    .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation;
      console.log(fullTextAnnotation.text);
      res.json(fullTextAnnotation);
    })
    .catch(err => {
      console.error('ERROR:', err);
  });
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})