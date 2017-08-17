'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDrugOrderCreateCtrl',
        function ($scope, Order2, $log, $uibModal, ISDEBUG, $location) {
            var XYDrugOrderCreateCtrl = this;
            var is_debug = ISDEBUG;
            $scope.status = {};
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
                XYDrugOrderCreateCtrl.allorder2s = Order2.query(function (response) {
                    $log.log("Response:" + response);
                    $log.log("XYDrugOrderCreateCtrl:(Succ)" + response);//JSON.parse(
                }, function (error) {
                    $log.log("XYDrugOrderCreateCtrl:(Error)" + error);
                });
            };
            $log.log('XYDrugOrderCreateCtrl');
            XYDrugOrderCreateCtrl.createdrugOrder = function () {
                XYDrugOrderCreateCtrl.drugorder = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                     outputparams: JSON.stringify(data2, null, 4),*/

                 personname : XYDrugOrderCreateCtrl.drugorder.personname, diseasename: XYDrugOrderCreateCtrl.drugorder.diseasename};

                $log.log(XYDrugOrderCreateCtrl.drugorder);

                Order2.create(XYDrugOrderCreateCtrl.drugorder, function () {
                    $log.log('Success after ComponentCreate');
                    $location.path('/XYTumordrug');
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };
            LoadFirstPage();
//    $scope.animationsEnabled = true;
        });