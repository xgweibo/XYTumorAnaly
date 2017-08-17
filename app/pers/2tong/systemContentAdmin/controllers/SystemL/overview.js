'use strict';

angular.module('adminSystemL.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: '../../../templs/SystemL/overview.html',
    controller: 'OveriewCtrl'
  });
}])

.controller('OveriewCtrl', function() {
});