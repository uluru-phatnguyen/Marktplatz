// Use layout files and EJS templating
var expressLayouts = require("express-ejs-layouts")
expressApp.set("view engine", "ejs")
expressApp.set('views', "./client");
expressApp.set("layout", "layout")
expressApp.use(expressLayouts)

// Use Sessions
var session = require("express-session")
var uuid = require("uuid")
expressApp.use(session({
  genid: function(req) {
    return uuid.v4() // use UUIDs for session IDs
  },
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_PASSWORD
}))

// Use body-parser, which is used to get params for POST requests
var bodyParser = require('body-parser')
expressApp.use( bodyParser.json() );       // to support JSON-encoded bodies
expressApp.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))