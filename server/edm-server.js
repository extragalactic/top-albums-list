// ==========================================================
//  Server code for edmDistrict Top Albums List app
// ==========================================================
(function() {
"use strict";

// define external modules
var express = require("express");
var http = require("http");
var app = express();
var settings = require("./../public/serverIP");
var server = http.createServer(app).listen(settings.EDM_DISTRICT_PORT);
var io = require("socket.io")(server);
var fs = require("fs");


// init MongoDB
var DBconnect = require("./modules/DBconnect");

// init application vars
var userList = [];

// set root folder for Express web server
app.use(express.static("./../public"));

// ----------------------------------------------------------------
// Handle the HTTP GET request for getting the list of top albums
// e.g. "http://192.168.1.69:3000/albums/15" will return the top 15 albums as a JSON object
// ----------------------------------------------------------------
app.get('/albums/:numResults', function(req, res) {
    var numAlbums = parseInt(req.params.numResults);
    DBconnect.getTopAlbums(numAlbums, function(returnData) {
      res.end(JSON.stringify(returnData));
    });
});

// ----------------------------------------------------
// Define handlers for incoming socket messages
// ----------------------------------------------------
io.on("connection", function(socket) {

    // ---------------------------------
    socket.on("login", function() {
      // add user to userList array
      var userData = {};
      userData.socketID = socket.id;
      userList.push(userData);

      var numUsers = userList.length;
      console.log('# users: ' + numUsers);
      // send users update to clients
      io.emit("userUpdate", numUsers);
    });

    // ---------------------------------
    socket.on("disconnect", function() {
      // remove user from userList array
      var numUsers = userList.length;
      for(var i=0, len = userList.length; i<len; ++i ) {
        var user = userList[i];
        if(user.socketID === socket.id){
          userList.splice(i,1);
          numUsers = userList.length;
          console.log('user logged out...');
          console.log('# users: ' + numUsers);
          break;
        }
      }
      // send users update to clients
      io.emit("userUpdate", numUsers);
    });
});

// start message to console
console.log("Starting edmDistrict Top Ablums List server on http://localhost:3000");

exports.mainApp = app;

}());
