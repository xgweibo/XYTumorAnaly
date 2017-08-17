'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYPersonalGenomeListCtrL', 
function($scope,Personalgenome,$log,ISDEBUG){
    var XYPersonalGenomeListCtrL = this;
    var is_debug = ISDEBUG;
    $scope.status = {};
    $scope.status.open = false;
    
    $scope.idselected = null;
    $scope.selectrow = function(tarid,in_num){
        $scope.idselected = tarid;
        $scope.idselected.index = in_num;
        $log.log('selectrow:'+in_num);
    }
    
    XYPersonalGenomeListCtrL.delComponent = function(tar_id,tar_index){
        Personalgenome.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYPersonalGenomeListCtrL.allgenomes.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
    
    var LoadFirstPage = function(){
        $log.log("XYTemplateList:Load First Page")
        XYPersonalGenomeListCtrL.allgenomes = Personalgenome.query(function(response){
            //$log.log("this is a test ");
            //$log.log(WFComponentListCtrl.allWFComponents);
            $log.log("Response:"+response);
            $log.log("XYPersonalGenomeListCtrL:(Succ)"+response);//JSON.parse(
        },function(error){
            $log.log("XYPersonalGenomeListCtrL:(Error)"+error);
        });
    };
    
    LoadFirstPage();
});