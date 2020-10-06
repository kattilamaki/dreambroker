let helpers = require("./helpers");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/analyze", (req, res) => {
  const str = req.body.text;
  const totalLength = str.length;
  const withoutSpaces = removeSpaces(str);
  const wordCount = getWordCount(str);
  const result = arrayToObject(removeDuplicateCharacters(sortLetters(removeNonLetters(withoutSpaces))));

  res.json({
    textLength: {
      withSpaces: totalLength,
      withoutSpaces: withoutSpaces.length 
    },
    wordCount: wordCount,
    characterCount: result
  });
})

// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
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
