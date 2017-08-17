'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDrugGeneListCtrl',
        function ($log, $routeParams, $scope, DrugGene,ISDEBUG,DrugGenepage) {
            var XYDrugGeneListCtrl = this;
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
            XYDrugGeneListCtrl.delDruggene = function(tar_id,tar_index){
            DrugGene.delme({id:tar_id},function(response){
            $log.log("del success"+response);
            XYDrugGeneListCtrl.curPageItems.splice(tar_index,1);
            $scope.idselected=null;
            //$scope.apply();
        });
    };//end delComponent func
            XYDrugGeneListCtrl.pageSize = 10;

            var LoadFirstPage = function () {
                XYDrugGeneListCtrl.curPageItems = DrugGenepage.list(
                        {pageNum: '1', pageSize: XYDrugGeneListCtrl.pageSize}, {});

                DrugGene.get({},
                        function (responseObj) {
                            XYDrugGeneListCtrl.count = responseObj.length;
                            $log.log("count response:" + responseObj.length);
                        });
            };

            LoadFirstPage();

            XYDrugGeneListCtrl.pageChanged = function () {
                XYDrugGeneListCtrl.curPageItems = DrugGenepage.list(
                        {entity: 'sra', pageNum: XYDrugGeneListCtrl.currentPage,
                            pageSize: XYDrugGeneListCtrl.pageSize}, {},
                        function (responseObj) {
                            $log.log('page for [' + XYDrugGeneListCtrl.currentPage + ']');
                            $log.log('recieve remote response:' + responseObj);
                        });
            };
        });
