'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDrugOrderListCtrl',
        function ($scope, Order2, $log, $uibModal, ISDEBUG, $location) {
            var XYDrugOrderListCtrl = this;
            var is_debug = ISDEBUG;
            $scope.status = {};
            $scope.all = "true";
            $scope.tao = "weibo";
            $scope.details = '0';
            $scope.status.open = false;
            $scope.idselected = null;
            $scope.selectrow = function (tarid, in_num) {
                $scope.idselected = tarid;
                $scope.idselected.index = in_num;
                $log.log('selectrow:' + in_num);
            };

            var LoadFirstPage = function () {
                $log.log("DrugOrderlateList:Load First Page");
                XYDrugOrderListCtrl.allorder2s = Order2.query(function (response) {
                    $log.log("Response:" + response);
                    $log.log("XYDrugOrderListCtrl:(Succ)" + response);//JSON.parse(
                }, function (error) {
                    $log.log("XYDrugOrderListCtrl:(Error)" + error);
                });
            };
            $log.log('XYDrugOrderListCtrl');
            XYDrugOrderListCtrl.createdrugOrder = function () {
                XYDrugOrderListCtrl.drugorder = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                     outputparams: JSON.stringify(data2, null, 4),*/

                 personname : XYDrugOrderListCtrl.drugorder.personname, diseasename: XYDrugOrderListCtrl.drugorder.diseasename};

                $log.log(XYDrugOrderListCtrl.drugorder);

                Order2.create(XYDrugOrderListCtrl.drugorder, function () {
                    $log.log('Success after ComponentCreate');
                    $location.path('/XYTumordrug');
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };
            XYDrugOrderListCtrl.openDetails = function(start){
                $scope.person = start;
                $scope.details = 1;
            };
            XYDrugOrderListCtrl.closeDetails = function(){
                $scope.details = 0;
            };
            LoadFirstPage();
//    $scope.animationsEnabled = true;
        });