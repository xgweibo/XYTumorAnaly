'use strict';

// Declare app level module which depends on views, and components
angular.module('adminSystemL', [
  'ngRoute',
  'adminSystemL.overview',
  'adminSystemL.GeneInfoChoose',
  'adminSystemL.GeneInfoRetrieve',
  'adminSystemL.GeneInfoUpdate',
  'adminSystemL.GeneInnfoCreate',
  'adminSystemL.PredictInfoNewShow',
  'adminSystemL.PredictInfoRetrieve',
  'adminSystemL.PredictInfoUpdate',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/overview'});
}]);