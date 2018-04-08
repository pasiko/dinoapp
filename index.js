const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

const db = require('./models');

app.listen(3000, function() {
  db.sequelize.sync();
});

app.post('/warranties', (req, res) => {

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