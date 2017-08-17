'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDrugGeneUpdataCtrl',
    function ($location, $log, $routeParams, DrugGene0, $scope
            //, CMPNTPARAMCOLUMNS1,
            //      CMPNTPARAMCOLUMNS2, GridRowData,WFCmpntParamWS
            ) {
        var XYDrugGeneUpdataCtrl = this;
        var seen = [];
//get data from server 
        XYDrugGeneUpdataCtrl.newdruggene = DrugGene0.get({id: $routeParams.drugID},
                //WFComponentUpdateCtrl.WFComponent = WFCmpntParamWS.get(
                        {action: 'bycmpnt', id: $routeParams.drugID},
                        function () {
                            $log.log('Success after get Comonent');
                            XYDrugGeneUpdataCtrl.datainput = XYDrugGeneUpdataCtrl.newdruggene.inputparams;
                            XYDrugGeneUpdataCtrl.dataoutput = XYDrugGeneUpdataCtrl.newdruggene.outputparams;
                            XYDrugGeneUpdataCtrl.tarRow = {entity: 'empty'};
                            //get inputparams
                            XYDrugGeneUpdataCtrl.updateDruggene = function () {
                                XYDrugGeneUpdataCtrl.newdruggene.$update({id: XYDrugGeneUpdataCtrl.newdruggene.drugID},
                                        function () {
                                            $log.log('Success after Updating DrugGene');
                                            $location.path('/XYDrugGeneList');
                                        }, function (err) {
                                    $log.log('err:' + err);
                                });
                            };

                        });
            });

