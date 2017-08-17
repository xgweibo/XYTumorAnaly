'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYDiseaseDBCreateCtrl',
        function ($location, $log, Diseasedb, $scope//,
               // CMPNTPARAMCOLUMNS1, CMPNTPARAMCOLUMNS2, GridRowData
              ) {

            //,getJWTuseridByStore){
            var XYDiseaseDBCreateCtrl = this;
            /*var getUserIdFromStore = function (store_tar){
             
             };
             */
            XYDiseaseDBCreateCtrl.inidselected = null;
            XYDiseaseDBCreateCtrl.outidselected = null;
            XYDiseaseDBCreateCtrl.tarRow = {entity: 'empty'};
            //WFComponentCreateCtrl.WFComponent.opusersIdopusers = {};e
            //WFComponentCreateCtrl.WFComponent.opusersIdopusers.idopusers = getJWTuseridByStore();       

            $log.log('XYDiseaseDBCreateCtrl');
            XYDiseaseDBCreateCtrl.createDiseasedb = function () {
                XYDiseaseDBCreateCtrl.DiseaseDB = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                    outputparams: JSON.stringify(data2, null, 4),*/
                    
                    diseasedbcname: XYDiseaseDBCreateCtrl.DiseaseDB.diseasedbcname,source: XYDiseaseDBCreateCtrl.DiseaseDB.source};
                
                $log.log(XYDiseaseDBCreateCtrl.DiseaseDB);
                
                Diseasedb.create(XYDiseaseDBCreateCtrl.DiseaseDB, function () {
                    $log.log('Success after DiseasedbCreate');
                    $location.path('/XYDiseaseDBList');
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };

//Inputparams part
        });
