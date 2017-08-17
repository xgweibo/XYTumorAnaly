'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDrugReportCtrl',
        function ($location, $log, $routeParams, Order1, $scope
         ) {
            var XYDrugReportCtrl = this;
            var seen = [];
            $scope.patient = $routeParams.personname;
//get data from server 
            
        var vm=$scope.vm={};  
            vm.style='blue';  
            vm.progress=50;  
            vm.text=false;  
            vm.myFunc=function(){  
                if(vm.progress>100){  
                    vm.progress=100;  
                }  
                if(vm.progress<0){  
                    vm.progress=0;  
                }  
            } ;
        });

