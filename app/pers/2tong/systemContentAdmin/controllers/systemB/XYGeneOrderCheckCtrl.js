'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYGeneOrderCheckCtrl', 
function($scope,Order1,$log){
    var XYGeneOrderCheckCtrl = this;
    $scope.status = {};
    $scope.status.open = false;
    $scope.idselected = null;
    $scope.selectrow = function(tarid,in_num){
        $scope.idselected = tarid;
        $scope.idselected.index = in_num;
        $log.log('selectrow:'+in_num);
    }
    
    XYGeneOrderCheckCtrl.delOrder = function(tar_id,tar_index){
        Order1.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYGeneOrderCheckCtrl.allorders.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
    
    var LoadFirstPage = function(){
        $log.log("OrderList:load First Page")
        XYGeneOrderCheckCtrl.allorders = Order1.query(function(response){
            //$log.log("this is a test ");
            //$log.log(WFComponentListCtrl.allWFComponents);
            $log.log("Response:"+response);
            $log.log("XYGeneOrderCheckCtrl:(Succ)"+response);//JSON.parse(
        },function(error){
            $log.log("XYGeneOrderCheckCtrl:(Error)"+error);
        });
    };
    
    LoadFirstPage();
});