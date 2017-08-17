'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('PredictInfoListCtrl', 
function($scope,PredictInfoWS,$log,ISDEBUG){
    var PredictInfoListCtrl = this;
    var is_debug = ISDEBUG;
    $scope.status = {};
    $scope.status.open = false;
    
    $scope.idselected = null;
    $scope.selectrow = function(tarid,in_num){
        $scope.idselected = tarid;
        $scope.idselected.index = in_num;
        $log.log('selectrow:'+in_num);
    }
    
    PredictInfoListCtrl.delComponent = function(tar_id,tar_index){
        PredictInfoWS.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            PredictInfoListCtrl.allPredictInfos.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
    
    var LoadFirstPage = function(){
        $log.log("WFTemplateList:Load First Page")
        PredictInfoListCtrl.allPredictInfos = PredictInfoWS.query(function(response){
            //$log.log("this is a test ");
            //$log.log(WFComponentListCtrl.allWFComponents);
            $log.log("Response:"+response);
            $log.log("PredictInfoListCtrl:(Succ)"+response);//JSON.parse(
        },function(error){
            $log.log("PredictInfoListCtrl:(Error)"+error);
        });
    };
    
    LoadFirstPage();
});