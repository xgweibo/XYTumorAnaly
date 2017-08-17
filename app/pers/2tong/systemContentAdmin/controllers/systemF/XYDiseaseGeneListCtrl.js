'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDiseaseGeneListCtrl',
        function ($log, $routeParams, $scope, Diseasegene,ISDEBUG,Diseasegenepage) {
            var XYDiseaseGeneListCtrl = this;
            var seen = [];
//get data from server 
            $scope.patient0 = $routeParams.personname;
            var is_debug = ISDEBUG;
            $scope.idselected = null;
            $scope.selectrow = function (tarid, in_num) {
                $scope.idselected = tarid;
                $scope.idselected.index = in_num;
                $log.log('selectrow:' + in_num);
            };  
            XYDiseaseGeneListCtrl.delDiseasegene = function(tar_id,tar_index){
            Diseasegene.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYDiseaseGeneListCtrl.curPageItems.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
            XYDiseaseGeneListCtrl.pageSize = 10;

            var LoadFirstPage = function () {
                XYDiseaseGeneListCtrl.curPageItems = Diseasegenepage.list(
                        {pageNum: '1', pageSize: XYDiseaseGeneListCtrl.pageSize}, {});

                Diseasegene.get({},
                        function (responseObj) {
                            XYDiseaseGeneListCtrl.count = responseObj.length;
                            $log.log("count response:" + responseObj.length);
                        });
            };

            LoadFirstPage();

            XYDiseaseGeneListCtrl.pageChanged = function () {
                XYDiseaseGeneListCtrl.curPageItems = Diseasegenepage.list(
                        {entity: 'sra', pageNum: XYDiseaseGeneListCtrl.currentPage,
                            pageSize: XYDiseaseGeneListCtrl.pageSize}, {},
                        function (responseObj) {
                            $log.log('page for [' + XYDiseaseGeneListCtrl.currentPage + ']');
                            $log.log('recieve remote response:' + responseObj);
                        });
            };
        });
