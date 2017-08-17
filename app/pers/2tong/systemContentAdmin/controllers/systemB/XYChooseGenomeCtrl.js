'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYChooseGenomeCtrl',
        function ($scope, Personalgenome, $log, $uibModalInstance, ISDEBUG) {
            var XYChooseGenomeCtrl = this;
            var is_debug = ISDEBUG;
            $scope.status = {};
            $scope.status.open = false;
            $scope.idselected = null;
            $scope.selectrow = function (tarid, in_num) {
                $scope.idselected = tarid;
                $scope.idselected.index = in_num;
                $log.log('selectrow:' + in_num);
            };
            var LoadFirstPage = function () {
                $log.log("XYGENElateList:Load First Page");
                XYChooseGenomeCtrl.allpersonalgenome = Personalgenome.query(function (response) {
                    $log.log("Response:" + response);
                    $log.log("XYChooseGenomeCtrl:(Succ)" + response);//JSON.parse(
                }, function (error) {
                    $log.log("XYChooseGenomeCtrl:(Error)" + error);
                });
            };
            $log.log('XYChooseGenomeCtrl');
            XYChooseGenomeCtrl.choosegene = function (pername) {
                XYChooseGenomeCtrl.selected = {
                    pergene: pername
                };
            };
//    XYChooseGenomeCtrl.choosedata = function(dataname){
//        XYChooseGenomeCtrl.perdata = dataname;
//    };
            LoadFirstPage();
            XYChooseGenomeCtrl.ok = function () {
                $uibModalInstance.close(XYChooseGenomeCtrl.selected.pergene);
            };

            XYChooseGenomeCtrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        });

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYChooseDataCtrl',
        function ($scope, Diseasedb, $log, $uibModalInstance, ISDEBUG) {
            var XYChooseDataCtrl = this;
            var is_debug = ISDEBUG;
            $scope.status = {};
            $scope.status.open = false;
            $scope.idselected = null;
            $scope.selectrow = function (tarid, in_num) {
                $scope.idselected = tarid;
                $scope.idselected.index = in_num;
                $log.log('selectrow:' + in_num);
            };
            var LoadFirstPage = function () {
                $log.log("XYGENElateList:Load First Page");
                XYChooseDataCtrl.alldiseasedbs = Diseasedb.query(function (response) {
                    $log.log("Response:" + response);
                    $log.log("XYChooseGenomeCtrl:(Succ)" + response);//JSON.parse(
                }, function (error) {
                    $log.log("XYChooseGenomeCtrl:(Error)" + error);
                });
            };
            $log.log('XYChooseGenomeCtrl');
            XYChooseDataCtrl.choosedata = function (dataname) {
                XYChooseDataCtrl.selected = {
                    perdata: dataname
                };
            };
//    XYChooseDataCtrl.choosedata = function(dataname){
//        XYChooseDataCtrl.perdata = dataname;
//    };
            LoadFirstPage();
            XYChooseDataCtrl.ok = function () {
                $uibModalInstance.close(XYChooseDataCtrl.selected.perdata);
            };

            XYChooseDataCtrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        });

