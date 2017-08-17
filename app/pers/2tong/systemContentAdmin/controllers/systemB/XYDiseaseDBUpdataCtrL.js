'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDiseaseDBUpdataCtrL',
        function ($location, $log, $routeParams, Diseasedb, $scope
        //, CMPNTPARAMCOLUMNS1,
          //      CMPNTPARAMCOLUMNS2, GridRowData,WFCmpntParamWS
         ) {
            var XYDiseaseDBUpdataCtrL = this;
            var seen = [];
//get data from server 
            XYDiseaseDBUpdataCtrL.DiseaseDB = Diseasedb.get({id: $routeParams.diseasedbid},
            //WFComponentUpdateCtrl.WFComponent = WFCmpntParamWS.get(
                    {action:'bycmpnt',id:$routeParams.diseasedbid},
                    function () {
                        $log.log('Success after get Comonent');
                        XYDiseaseDBUpdataCtrL.datainput = XYDiseaseDBUpdataCtrL.DiseaseDB.inputparams;
                        XYDiseaseDBUpdataCtrL.dataoutput = XYDiseaseDBUpdataCtrL.DiseaseDB.outputparams;
                        XYDiseaseDBUpdataCtrL.tarRow = {entity: 'empty'};
                        //get inputparams
                        XYDiseaseDBUpdataCtrL.updateDiseaseDB = function () {
                            XYDiseaseDBUpdataCtrL.DiseaseDB.$update({id: XYDiseaseDBUpdataCtrL.DiseaseDB.diseasedbid},
                                    function () {
                                        $log.log('Success after Updating Component');
                                        $location.path('/XYDiseaseDBList');
                                    }, function (err) {
                                $log.log('err:' + err);
                            });
                        };
                    });
        });

