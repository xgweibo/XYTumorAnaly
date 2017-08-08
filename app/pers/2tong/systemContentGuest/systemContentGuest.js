'use strict';

angular.module('myApp.systemContentGuest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/content', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentAdminCtrl'
  });
}])

.controller('SystemContentGuestCtrl', [function() {

}]);