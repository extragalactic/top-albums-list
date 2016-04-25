// ----------------------------------------------------
// Data service using HTTP GET commands to get album lists from the server
// ----------------------------------------------------

var http = require("http");

angular.module('myApp').service('DataAccessService', function () {
    "use strict";

    this.getTopAlbums = function(numAlbums, callback) {

        var options = {
          host: settings.EDM_DISTRICT_SERVER_IP,
          port: settings.EDM_DISTRICT_PORT,
          path: '/albums/' + numAlbums,
          method: 'GET'
        };
        var returnData = '';

        var req = http.request(options, function(res) {
          //console.log('STATUS: ' + res.statusCode);
          res.on('data', function (chunk) {
            returnData += chunk;
          });

          res.on('end', function() {
            callback(JSON.parse(returnData));
          });
        });

        req.on('error', function(e) {
          console.log('Problem with album GET request: ' + e.message);
        });

        req.end();
    };
});
