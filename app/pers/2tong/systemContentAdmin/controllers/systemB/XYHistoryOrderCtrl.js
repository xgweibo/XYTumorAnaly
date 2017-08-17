'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYOrderHistoryCtrl', 
function($scope,Order1,Order2,$log,ISDEBUG){
    var XYOrderHistoryCtrl = this;
    var is_debug = ISDEBUG;
    $scope.status = {};
    $scope.status.open = false;
    
    $scope.idselected = null;
    $scope.selectrow = function(tarid,in_num){
        $scope.idselected = tarid;
        $scope.idselected.index = in_num;
        $log.log('selectrow:'+in_num);
    };
    
    XYOrderHistoryCtrl.delOrder = function(tar_id,tar_index){
        Order1.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYOrderHistoryCtrl.allorders.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
    
    var LoadFirstPage = function(){
        $log.log("Order1List:load First Page")
        XYOrderHistoryCtrl.allorders = Order1.query(function(response){
            //$log.log("this is a test ");
            //$log.log(WFComponentListCtrl.allWFComponents);
            $log.log("Response:"+response);
            $log.log("XYOrderHistoryCtrl:(Succ)"+response);//JSON.parse(
        },function(error){
            $log.log("XYOrderHistoryCtrl:(Error)"+error);
        });
    };
    
    XYOrderHistoryCtrl.delOrder2 = function(tar_id,tar_index){
        Order2.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYOrderHistoryCtrl.allorder2s.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
    
    var LoadSecondPage = function(){
        $log.log("Order2List:load First Page");
        XYOrderHistoryCtrl.allorder2s = Order2.query(function(response){
            //$log.log("this is a test ");
            //$log.log(WFComponentListCtrl.allWFComponents);
            $log.log("Response:"+response);
            $log.log("XYOrderHistoryCtrl:(Succ)"+response);//JSON.parse(
        },function(error){
            $log.log("XYOrderHistoryCtrl:(Error)"+error);
        });
    };
    XYOrderHistoryCtrl.starttuomr = function(start){
      $scope.tumor = start;
   };   
   XYOrderHistoryCtrl.startdrug = function(start){
       $scope.drug = start;
   };
   XYOrderHistoryCtrl.closetumor = function(close){
       $scope.tumor = close;
   };
   XYOrderHistoryCtrl.closedrug = function(close){
        $scope.drug = close;
    };
    LoadFirstPage();
    LoadSecondPage();
});