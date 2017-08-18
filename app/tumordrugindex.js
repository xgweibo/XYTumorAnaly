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
                when('/tumoranaly', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/SystemB/XYTumorAnaly.html'
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
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYHistoryOrder.html'
                }).
                when('/XYTumorAnalysis', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYGeneTest.html'
                }).   
                when('/XYPersonalgenomeList', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYPersonalgenomeList.html'
                }).
                when('/XYDiseaseDBList', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYDiseaseDBList.html'
                }).
                
                when('/PersonalgenomeUpdate/:personalgenomeid', {
                    templateUrl: 'spers/2tong/systemContentAdmin/templs/systemB/XYPersonalGenomeUpdata.html'
                }).
                when('/XYDiseaseDBUpdate/:diseasedbid', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYDiseaseDBUpdata.html'
                }).
                when('/XYDiseaseDBCreate', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYDiseaseDBCreate.html'
                }).
                when('/PersonalgenomeCreate', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYPersonalGenomeCreate.html'
                }).
                
                when('/XYGeneOrder', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYGeneCheckOrder.html'
                }).
                when('/XYGeneReport/:orderid', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYGeneReport.html'
                }).
                when('/XYTumorDrugReport/:personname', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYTumorDrugReport.html'
                }). 
                when('/XYTumordrug', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDrugOrderList.html'
                }).
                when('/XYDrugOrderCreate', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDrugOrderCreate.html'
                }).
                when('/XYCancerpersonList', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYCancerpersonList.html'
                }).
                when('/XYCancerpersonList/:personname', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYCancerpersonList.html'
                }).
                when('/XYDiseaseGeneList', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDiseaseGeneList.html'
                }).
                when('/XYDiseaseGeneList/:personname', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDiseaseGeneList.html'
                }).
                when('/XYDrugOrderUpdate/:orderid', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDrugOrderUpdate.html'
                }).
                when('/XYTuomrGeneList/:persongenomename', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYTuomrGeneList.html'
                }).
                when('/XYDiseaseGeneCreate', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDiseaseGeneCreate.html'
                }).
                when('/XYDiseaseGeneUpdate/:geneID', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDiseaseGeneUpdate.html'
                }).
                when('/XYDrugGeneList', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDrugGeneList.html'
                }).
                when('/XYDrugGeneCreate', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDrugGeneCreate.html'
                }).
                when('/XYDrugGeneUpdate/:drugID', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDrugGeneUpdate.html'
                }).
                when('/XYDrugGeneList/:personname', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYDrugGeneList.html'
                }).
                when('/XYTumordrugOrder', {
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemF/XYTumorDrugOrderList.html'
                }).
                otherwise({redirectTo: '/overview'});
    }]);
