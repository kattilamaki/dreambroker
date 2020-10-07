let helpers = require("./helpers");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.post("/analyze", (req, res) => {
  const str = req.body.text;

  res.json({
    textLength: {
      withSpaces: str.length,
      withoutSpaces: removeSpaces(str).length 
    },
    wordCount: getWordCount(str),
    characterCount: getCharacterOccurrences(str)
  });
})

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

const listener = app.listen(process.env.PORT || 3001    , () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
