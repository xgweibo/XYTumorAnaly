'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYTumorGeneListCtrl',
        function ($log, $routeParams, $scope, Genelist,ISDEBUG,Genelistpage) {
            var XYTumorGeneListCtrl = this;
            var seen = [];
//get data from server 
            $scope.patient0 = $routeParams.persongenomename;
            var is_debug = ISDEBUG;
            $scope.idselected = null;
            $scope.selectrow = function (tarid, in_num) {
                $scope.idselected = tarid;
                $scope.idselected.index = in_num;
                $log.log('selectrow:' + in_num);
            };  
            XYTumorGeneListCtrl.pageSize = 10;

            var LoadFirstPage = function () {
                XYTumorGeneListCtrl.curPageItems = Genelistpage.list(
                        {pageNum: '1', pageSize: XYTumorGeneListCtrl.pageSize}, {});

                Genelist.get({},
                        function (responseObj) {
                            XYTumorGeneListCtrl.count = responseObj.length;
                            $log.log("count response:" + responseObj.length);
                        });
            };

            LoadFirstPage();

            XYTumorGeneListCtrl.pageChanged = function () {
                XYTumorGeneListCtrl.curPageItems = Genelistpage.list(
                        {entity: 'sra', pageNum: XYTumorGeneListCtrl.currentPage,
                            pageSize: XYTumorGeneListCtrl.pageSize}, {},
                        function (responseObj) {
                            $log.log('page for [' + XYTumorGeneListCtrl.currentPage + ']');
                            $log.log('recieve remote response:' + responseObj);
                        });
            };
        });
