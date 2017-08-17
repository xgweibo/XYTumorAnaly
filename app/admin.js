'use strict';

// Declare app level module which depends on views, and components
var workflowapp = angular.module('workflowapp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'angular-storage',
    'angular-jwt',
    'workflowapp.WorkflowIndex',    
    'ngWebSocket',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'XYWorkbench.Common',
    'XYWorkbench.Home',
    'myApp.version'
]);
/*
 * Angular-JWT adds authroization in header by options requet.
 
 opuserapp.config(function myAppConfig (  
 //$urlRouterProvider,
 jwtInterceptorProvider, $httpProvider) {
 
 //$urlRouterProvider.otherwise('/');
 
 jwtInterceptorProvider.tokenGetter = function($log,store) {
 $log.log('in tokenGetter of jwt Interceptor!');
 var jwtToken = store.get('jwt_opuser');
 $log.log('jwt_opuser:'+jwtToken);
 return jwtToken;
 };
 
 $httpProvider.interceptors.push('jwtInterceptor');
 });
 */
workflowapp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/overview', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/overview.html'
                }).
                when('/geneInfo', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/GeneInfoRetrieve.html'
                })
                .when('/geneInfo/add', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/GeneInfoCreate.html'
                }).
                when('/geneInfo/update/:id', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/GeneInfoUpdate.html'
                }).
                when('/WFCmpntParamsList/:belongidwfcmpnt', {
                    templateUrl: 'WorkflowIndex/tmpl/WFCmpntParamsList.html'
                }).
                when('/predictInfo', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/PredictInfoRetrieve.html'
                }).
                when('/predictInfo/add/choosedata', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/GeneInfoChoose.html'
                }).
                when('/predictInfo/add/result', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/PredictInfoNewShow.html'
                }).
                when('/predictInfo/update/:id', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemL/PredictInfoUpdate.html'
                }).
                otherwise({redirectTo: '/overview'});
    }]);
