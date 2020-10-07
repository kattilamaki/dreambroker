# DB Code challenge

## About
Deliver endpoint to post text and return text insights like word and individual character count

## Installation
1. npm install
2. npm start

## Run tests
There is also some Jest tests testing the application logic tests could be run with
1. npm run test

## Running example
Running example can be found from [https://infinite-ravine-94058.herokuapp.com/analyze]. Just post some text like json with text like `{"text":"Hello World"}` as request body.

## Example output
```json
{
    "textLength": {
        "withSpaces": 11,
        "withoutSpaces": 10
    },
    "wordCount": 2,
    "characterCount": [
        {"d": 1}, {"e": 1},{"h": 1},{"l": 3},{"o": 2},{"r": 1},{"w": 1}
    ]
}
```