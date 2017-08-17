/* global tumor */

'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYCancerListCtrL', 
function($scope,Cancerperson,$log,$window,$routeParams,$location,ISDEBUG){
    var XYCancerListCtrL = this;
    var is_debug = ISDEBUG;
    $scope.status = {};
    $scope.type0 = "Expression";
    $scope.encode0 = "";
    $scope.Patient = $routeParams.personname;
    $scope.status.open = false;
    $scope.waitpatient = "";
    $scope.idselected = null;
    $scope.selectrow = function(tarid,in_num){
        $scope.idselected = tarid;
        $scope.idselected.index = in_num;
        $log.log('selectrow:'+in_num);
    };
    XYCancerListCtrL.createExpression = function () {
                XYCancerListCtrL.ExpressionDB = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                    outputparams: JSON.stringify(data2, null, 4),*/
                    
                    persongenomename: XYCancerListCtrL.ExpressionDB.persongenomename,encode: XYCancerListCtrL.ExpressionDB.encode,type: XYCancerListCtrL.ExpressionDB.type};
                
                $log.log(XYCancerListCtrL.ExpressionDB);
                
                Cancerperson.create(XYCancerListCtrL.ExpressionDB, function () {
                    $log.log('Success after ExpressionDBCreate');
                    $window.location.reload();
//                    $location.path('/XYCancerpersonList/' +$routeParams.personname);
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };
    
    XYCancerListCtrL.delpatient = function(tar_id,tar_index){
        Cancerperson.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYCancerListCtrL.allpersons.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
    
    var LoadFirstPage = function(){
        $log.log("XYTemplateList:Load First Page")
        XYCancerListCtrL.allpersons = Cancerperson.query(function(response){
            //$log.log("this is a test ");
            //$log.log(WFComponentListCtrl.allWFComponents);
            $log.log("Response:"+response);
            $log.log("XYCancerListCtrL:(Succ)"+response);//JSON.parse(
        },function(error){
            $log.log("XYCancerListCtrL:(Error)"+error);
        });
    };
   
    XYCancerListCtrL.Tumor = function(){
            $scope.encode0 = 'tumor';
    };
    XYCancerListCtrL.Control = function(){
            $scope.encode0 = 'control';
    };
    LoadFirstPage();
});