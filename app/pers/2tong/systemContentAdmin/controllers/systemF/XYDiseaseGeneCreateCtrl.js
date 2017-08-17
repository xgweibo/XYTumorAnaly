'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDiseaseGeneCreateCtrl',
        function ($scope, Diseasegene, $log, ISDEBUG, $location) {
            var XYDiseaseGeneCreateCtrl = this;
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
                XYDiseaseGeneCreateCtrl.alldiseasegenes = Diseasegene.query(function (response) {
                    $log.log("Response:" + response);
                    $log.log("XYDiseaseGeneCreateCtrl:(Succ)" + response);//JSON.parse(
                }, function (error) {
                    $log.log("XYDiseaseGeneCreateCtrl:(Error)" + error);
                });
            };
            $log.log('XYDrugOrderCreateCtrl');
            XYDiseaseGeneCreateCtrl.creatediseaseGene = function () {
                XYDiseaseGeneCreateCtrl.diseaseGene = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                     outputparams: JSON.stringify(data2, null, 4),*/

                 genename : XYDiseaseGeneCreateCtrl.diseaseGene.genename, 
                 diseasename: XYDiseaseGeneCreateCtrl.diseaseGene.diseasename,
                 diseasepheno :XYDiseaseGeneCreateCtrl.diseaseGene.diseasepheno};

                $log.log(XYDiseaseGeneCreateCtrl.drugorder);

                Diseasegene.create(XYDiseaseGeneCreateCtrl.diseaseGene, function () {
                    $log.log('Success after ComponentCreate');
                    $location.path('/XYDiseaseGeneList');
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };
            LoadFirstPage();
//    $scope.animationsEnabled = true;
        });