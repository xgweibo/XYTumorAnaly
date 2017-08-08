'use strict';

angular.module('myApp.systemContentAdmin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SystemA/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlA'
  });
}])

.controller('SystemContentAdminCtrlA', [function() {

}]);