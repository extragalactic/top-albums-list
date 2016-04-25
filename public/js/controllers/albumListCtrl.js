// --------------------------------------------------------
//  AlbumListController for the albums list display page
// --------------------------------------------------------

angular.module('myApp').controller('AlbumListController', ['$scope', '$http',  'DataAccessService', function ($scope, $http, DataAccessService) {
  "use strict";
 
  $scope.albumList = [];
  $scope.numberAlbums = "20"; // default to 20 albums

  $scope.refreshAlbumList = function() {
    DataAccessService.getTopAlbums($scope.numberAlbums, function(returnData) {
      returnData = $scope.formatNumbers(returnData);
      $scope.albumList = returnData;
      $scope.$apply();
      console.log('received ' + $scope.albumList.length + ' albums from db');
    });
  };

  // Initialize page
  $scope.initialize = function() {
    // start page by refreshing the album list
    $scope.refreshAlbumList();
  };

  // Utility function to add a new "NumberPlays_formatted" field to the returned array, which adds commas to the numbers to make them easier to read
  $scope.formatNumbers = function(albumData) {
    for (var i = 0; i < albumData.length; i++) {
      albumData[i].NumberPlays_formatted = albumData[i].NumberPlays.toLocaleString();
    }
    return albumData;
  };

  // Listen for messages from view: user selects from the 'numberAlbums' dropdown
  $scope.changeNumberAlbums = function() {
    $scope.refreshAlbumList();
  };

  // ---------------------------------------------------

  // start page
  $scope.initialize();

}]);
