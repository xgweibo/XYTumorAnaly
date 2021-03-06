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
                when('/Home', {
                    templateUrl: 'tumoranalyindex.html'
                }).
                /*when('/WFTemplateList', {
                    templateUrl: 'WorkflowIndex/tmpl/WFTemplateList.html'
                }).
                when('/WFTemplateCreate', {
                    templateUrl: 'WorkflowIndex/tmpl/WFTemplateCreate.html'
                }).
                when('/WFTemplateUpdate/:idwftemplate', {
                    templateUrl: 'WorkflowIndex/tmpl/WFTemplateUpdate.html'
                }).
                when('/WFTemplateDesign/:idwftemplate', {
                    templateUrl: 'WorkflowIndex/tmpl/WFTemplateDesigner.html'
                }).*/
                when('/XYHistoryOrder', {
                    templateUrl: 'systemB/Analytmpl/XYHistoryOrder.html'
                }).
                when('/XYTumorAnalysis', {
                    templateUrl: 'systemB/Analytmpl/XYGeneTest.html'
                }).   
                when('/XYPersonalgenomeList', {
                    templateUrl: 'systemB/Analytmpl/XYPersonalgenomeList.html'
                }).
                when('/XYDiseaseDBList', {
                    templateUrl: 'systemB/Analytmpl/XYDiseaseDBList.html'
                }).
                
                when('/PersonalgenomeUpdate/:personalgenomeid', {
                    templateUrl: 'systemB/Analytmpl/XYPersonalGenomeUpdata.html'
                }).
                when('/XYDiseaseDBUpdate/:diseasedbid', {
                    templateUrl: 'systemB/Analytmpl/XYDiseaseDBUpdata.html'
                }).
                when('/XYDiseaseDBCreate', {
                    templateUrl: 'systemB/Analytmpl/XYDiseaseDBCreate.html'
                }).
                when('/PersonalgenomeCreate', {
                    templateUrl: 'systemB/Analytmpl/XYPersonalGenomeCreate.html'
                }).
                
                when('/XYGeneOrder', {
                    templateUrl: 'systemB/Analytmpl/XYGeneCheckOrder.html'
                }).
                when('/XYGeneReport/:orderid', {
                    templateUrl: 'systemB/Analytmpl/XYGeneReport.html'
                }).
                when('/XYTumorDrugReport/:personname', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYTumorDrugReport.html'
                }). 
                when('/XYDrugGiude', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDrugOrderList.html'
                }).
                when('/XYDrugOrderCreate', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDrugOrderCreate.html'
                }).
                when('/XYCancerpersonList', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYCancerpersonList.html'
                }).
                when('/XYCancerpersonList/:personname', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYCancerpersonList.html'
                }).
                when('/XYDiseaseGeneList', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDiseaseGeneList.html'
                }).
                when('/XYDiseaseGeneList/:personname', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDiseaseGeneList.html'
                }).
                when('/XYDrugOrderUpdate/:orderid', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDrugOrderUpdate.html'
                }).
                when('/XYTuomrGeneList/:persongenomename', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYTuomrGeneList.html'
                }).
                when('/XYDiseaseGeneCreate', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDiseaseGeneCreate.html'
                }).
                when('/XYDiseaseGeneUpdate/:geneID', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDiseaseGeneUpdate.html'
                }).
                when('/XYDrugGeneList', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDrugGeneList.html'
                }).
                when('/XYDrugGeneCreate', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDrugGeneCreate.html'
                }).
                when('/XYDrugGeneUpdate/:drugID', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDrugGeneUpdate.html'
                }).
                when('/XYDrugGeneList/:personname', {
                    templateUrl: 'WorkflowIndex/tmpl/Drugtmpl/XYDrugGeneList.html'
                }).
                otherwise({redirectTo: '/overview'});
    }]);
