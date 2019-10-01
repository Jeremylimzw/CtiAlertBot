var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// Imports required actions
const start = require('./TextActions/start')
const help = require('./TextActions/help')
const unrecognized = require('./TextActions/unrecognized')
const login = require('./TextActions/login')

// for parsing application/json
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
//This is the route the API will call
app.post('/', function(req, res) {
  console.log('Message receieved')
  console.log("text:"+ req.body.message.text)
  const message = req.body.message

  // Program Flow
  if (message.text === "/start") {
    start(message,res)
  } else if ( message.text === "/help") {
    help(message,res)
  } else if ( message.contact !== undefined) {
    login(message,res)
  } else {
    unrecognized(message,res)
  }
})

// Finally, start our server
app.listen(443, function() {
  console.log('Telegram app listening on port 443!')
})