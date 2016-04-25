// ----------------------------------------------------
// Create a socket connection with socket.io
// ----------------------------------------------------

var socketio = require('socket.io-client');

angular.module('myApp').factory('SocketFactory', function ($rootScope) {
  "use strict";

   var socketPath = "http://" + EDM_DISTRICT_SERVER_IP + ":" + EDM_DISTRICT_PORT;
   console.log('creating socket connection: ' + socketPath);
   var socket = socketio.connect(socketPath);

   return {
     on: function (eventName, callback) {
         socket.on(eventName, function () {
             var args = arguments;
             $rootScope.$apply(function () {
                 callback.apply(socket, args);
             });
         });
     },
     emit: function (eventName, data) {
         socket.emit(eventName, data);
     },
     removeAllListeners: function () {
       socket.removeAllListeners();
     },
     id: socket.id
  };
});
