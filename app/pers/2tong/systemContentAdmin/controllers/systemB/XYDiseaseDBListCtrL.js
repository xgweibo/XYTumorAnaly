'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDiseaseDBListCtrl', 
function($scope,Diseasedb,$log,ISDEBUG){
    var XYDiseaseDBListCtrl = this;
    var is_debug = ISDEBUG;
    $scope.status = {};
    $scope.status.open = false;
    
    $scope.idselected = null;
    $scope.selectrow = function(tarid,in_num){
        $scope.idselected = tarid;
        $scope.idselected.index = in_num;
        $log.log('selectrow:'+in_num);
    }
    
    XYDiseaseDBListCtrl.delComponent = function(tar_id,tar_index){
        Diseasedb.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYDiseaseDBListCtrl.alldiseasedbs.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
    
    var LoadFirstPage = function(){
        $log.log("XYTemplateList:Load First Page")
        XYDiseaseDBListCtrl.alldiseasedbs = Diseasedb.query(function(response){
            //$log.log("this is a test ");
            //$log.log(WFComponentListCtrl.allWFComponents);
            $log.log("Response:"+response);
            $log.log("XYDiseaseDBListCtrl:(Succ)"+response);//JSON.parse(
        },function(error){
            $log.log("XYDiseaseDBListCtrl:(Error)"+error);
        });
    };
    
    LoadFirstPage();
});