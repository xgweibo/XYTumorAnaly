'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDrugOrderUpdataCtrl',
        function ($location, $log, $routeParams, Order2, $scope
        //, CMPNTPARAMCOLUMNS1,
          //      CMPNTPARAMCOLUMNS2, GridRowData,WFCmpntParamWS
         ) {
            var XYDrugOrderUpdataCtrl = this;
            var seen = [];
//get data from server 
            XYDrugOrderUpdataCtrl.Drugorder = Order2.get({id: $routeParams.orderid},
            //WFComponentUpdateCtrl.WFComponent = WFCmpntParamWS.get(
                    {action:'bycmpnt',id:$routeParams.orderid},
                    function () {
                        $log.log('Success after get Comonent');
                        XYDrugOrderUpdataCtrl.datainput = XYDrugOrderUpdataCtrl.Drugorder.inputparams;
                        XYDrugOrderUpdataCtrl.dataoutput = XYDrugOrderUpdataCtrl.Drugorder.outputparams;
                        XYDrugOrderUpdataCtrl.tarRow = {entity: 'empty'};
                        //get inputparams
                        XYDrugOrderUpdataCtrl.updateDrugorder = function () {
                            XYDrugOrderUpdataCtrl.Drugorder.$update({id: XYDrugOrderUpdataCtrl.Drugorder.orderid},
                                    function () {
                                        $log.log('Success after Updating Component');
                                        $location.path('/XYTumordrug');
                                    }, function (err) {
                                $log.log('err:' + err);
                            });
                        };
                        
                    });

/*
            $scope.InputgridOpts.onRegisterApi = function (gridApi) {
                //set gridApi1 on scope
                $scope.gridApi1 = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    var msg = 'input row selected ' + row.isSelected;
                    $log.log(msg);
                    WFComponentUpdateCtrl.inidselected = row.isSelected;

                });
                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
                    var msg = 'input rows changed ' + rows.length;
                    $log.log(msg);
                });
            };

            $scope.inputdeleteSelected = function (inidselected) {
                $log.log('inputparams delete');
                $log.log(WFComponentUpdateCtrl.inidselected);
                angular.forEach($scope.gridApi1.selection.getSelectedRows(), function (data, index) {
                    $scope.InputgridOpts.data.splice($scope.InputgridOpts.data.lastIndexOf(data), 1);
                });
                WFComponentUpdateCtrl.inidselected = null;
            };

            $scope.OutputgridOpts.onRegisterApi = function (gridApi) {
                //set gridApi on scope
                $scope.gridApi2 = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    var msg = 'output row selected ' + row.isSelected;
                    WFComponentUpdateCtrl.outidselected = row.isSelected;
                    $log.log(msg);

                });

                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
                    var msg = 'output rows changed ' + rows.length;
                    $log.log(msg);
                });
            };
            $scope.outputdeleteSelected = function () {
                $log.log('outputparams delete');
                $log.log(WFComponentUpdateCtrl.outidselected);
                angular.forEach($scope.gridApi2.selection.getSelectedRows(), function (data, index) {
                    $scope.OutputgridOpts.data.splice($scope.OutputgridOpts.data.lastIndexOf(data), 1);
                });
                WFComponentUpdateCtrl.outidselected = null;
            };
            */
        });

