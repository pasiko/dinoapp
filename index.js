const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer');

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

const db = require('./models');

db.sequelize.sync();

const upload = multer();

app.post('/warranties', upload.single(['receipt']), (req, res, next) => {
  const receiptName = req.body.name;
  const receiptFile = req.file.buffer; // JPG image of receipt

  const vision = require('@google-cloud/vision');
  const client = new vision.ImageAnnotatorClient();

  client
    .documentTextDetection(receiptFile)
    .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation.text;
      console.log(fullTextAnnotation);

      var Warranty = db.Warranty;

      Warranty.create({
        name: receiptName,
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