global.sys = require('sys')
global.exec = require('child_process').exec;
global.puts = function(error, stdout, stderr) { console.log(stdout) }
exec("sh ./scripts/sh_setup.sh", puts);

// NPM dependencies
global._ = require("underscore")
global = _.extend(global, {
  Sequelize: require("sequelize"),
  app: {},
  appHelpers: {},
})

// App dependencies
require("./app/models.js") // defines app.sequelize, app.Models and app.ORM

appHelpers.addRoutesToExpressApp = function(){
  require("./app/routes.js")
}

// Function to start the server
appHelpers.startServer = function() {
  global.server = require("http").createServer(),
  global.WebSocketServer = require('ws').Server,
  global.wss = new WebSocketServer({ server: server })
  global.url = require('url'),
  global.port = 4080,
  global.express = require('express'),
  global.expressApp = express()
  appHelpers.addRoutesToExpressApp()
  server.on('request', expressApp);
  server.listen(port, function () {console.log('Listening on ' + server.address().port) });
}

// Start server after syncing models
app.Models.syncModels().then(function(){
  console.log("synced models")
  if (require.main === module) { // meaning if this script is called directly
    appHelpers.startServer()
  } else {
    console.log("starting REPL")
    var repl = require("repl")
    var context = repl.start("> ").context
    context.util = require("util")
  }
})