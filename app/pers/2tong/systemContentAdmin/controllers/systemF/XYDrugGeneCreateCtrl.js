'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDrugGeneCreateCtrl',
        function ($scope, DrugGene, $log, ISDEBUG, $location) {
            var XYDrugGeneCreateCtrl = this;
            var is_debug = ISDEBUG;
            $scope.status = {};
            $scope.status.open = false;
            var LoadFirstPage = function () {
                $log.log("DrugGenelateList:Load First Page");
                XYDrugGeneCreateCtrl.alldruggenes = DrugGene.query(function (response) {
                    $log.log("Response:" + response);
                    $log.log("XYDrugGeneCreateCtrl:(Succ)" + response);//JSON.parse(
                }, function (error) {
                    $log.log("XYDrugGeneCreateCtrl:(Error)" + error);
                });
            };
            $log.log('XYDrugOrderCreateCtrl');
            XYDrugGeneCreateCtrl.createdrugGene = function () {
                XYDrugGeneCreateCtrl.drugGene = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                     outputparams: JSON.stringify(data2, null, 4),*/

                 genename : XYDrugGeneCreateCtrl.drugGene.genename, 
                 drugname : XYDrugGeneCreateCtrl.drugGene.drugname, 
                 diseasename: XYDrugGeneCreateCtrl.drugGene.diseasename,
                 treat: XYDrugGeneCreateCtrl.drugGene.treat,
                 adversereactions :XYDrugGeneCreateCtrl.drugGene.adversereactions};

                $log.log(XYDrugGeneCreateCtrl.drugGene);

                DrugGene.create(XYDrugGeneCreateCtrl.drugGene, function () {
                    $log.log('Success after DrugGeneCreate');
                    $location.path('/XYDrugGeneList');
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };
            LoadFirstPage();
//    $scope.animationsEnabled = true;
        });