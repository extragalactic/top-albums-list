// -----------------------------------------------------------
//  Main application script for edmDistrict's Top Albums List
// -----------------------------------------------------------

require("angular-ui-bootstrap");

// create main Angular module
var myApp = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
])
// run initialization procedures
.run(['SocketFactory', function(SocketFactory) {
  SocketFactory.emit('login');
}])
// init Angular route provider
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/albumList.html',
    controller: 'AlbumListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
