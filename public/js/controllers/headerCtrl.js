// ----------------------------------------------------
// HeaderController to manage the site header
// ----------------------------------------------------

angular.module('myApp').controller('HeaderController', ['$scope', '$http', 'SocketFactory', function ($scope, $http, SocketFactory) {
  "use strict";
  
  // init vars
  $scope.numUsers = 0;

  // create functionality for nav buttons
  $scope.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  };

  // remove socket listeners when leaving page
  $scope.$on('$destroy', function (event) {
    SocketFactory.removeAllListeners();
  });

  // listen for socket message from server to update number of users field
  SocketFactory.on('userUpdate', function (data) {
      $scope.numUsers = data;
  });

}]);
