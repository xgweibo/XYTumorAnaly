'use strict';

angular.module('adminSystemL.PredictInfoNewShow', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/predictInfoNewShow', {
    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/PredictInfoNewShow.html',
    controller: 'PredictInfoNewShowCtrl'
  });
}])

.controller('PredictInfoNewShowCtrl', function($scope) {
});