const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

const db = require('./models');

db.sequelize.sync();

console.log("** READY");


app.post('/warranties', (req, res) => {
  const body = req.body;
  console.log(body);

  const vision = require('@google-cloud/vision');
  const client = new vision.ImageAnnotatorClient();

  client
    .documentTextDetection("receipt.jpg")
    .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation.text;
      console.log(fullTextAnnotation);

      var Warranty = db.Warranty;

      Warranty.create({
        name: body.name,
        ocr_text: fullTextAnnotation
      })
        .then(function (fullTextAnnotation) {
          res.json(fullTextAnnotation);
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
  });
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})