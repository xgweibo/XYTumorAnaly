'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYGeneReportCtrl',
        function ($location, $log, $routeParams, Order1, $scope
         ) {
            var XYGeneReportCtrl = this;
            var seen = [];
//get data from server 
            XYGeneReportCtrl.Personorder = Order1.get({id: $routeParams.orderid},
            //WFComponentUpdateCtrl.WFComponent = WFCmpntParamWS.get(
                    {action:'bycmpnt',id:$routeParams.orderid},
                    function () {
                        $log.log('Success after get Comonent');
                        XYGeneReportCtrl.datainput = XYGeneReportCtrl.Personorder.inputparams;
                        XYGeneReportCtrl.dataoutput = XYGeneReportCtrl.Personorder.outputparams;
                        XYGeneReportCtrl.tarRow = {entity: 'empty'};
                        //get inputparams
                        
                    });
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

