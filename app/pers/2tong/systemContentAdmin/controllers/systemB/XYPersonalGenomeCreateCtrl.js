'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYPersonalGenomeCreateCtrl',
        function ($location, $log, Personalgenome, $scope//,
               // CMPNTPARAMCOLUMNS1, CMPNTPARAMCOLUMNS2, GridRowData
              ) {

            //,getJWTuseridByStore){
            var XYPersonalGenomeCreateCtrl = this;
            /*var getUserIdFromStore = function (store_tar){
             
             };
             */
            XYPersonalGenomeCreateCtrl.inidselected = null;
            XYPersonalGenomeCreateCtrl.outidselected = null;
            XYPersonalGenomeCreateCtrl.tarRow = {entity: 'empty'};
            //WFComponentCreateCtrl.WFComponent.opusersIdopusers = {};e
            //WFComponentCreateCtrl.WFComponent.opusersIdopusers.idopusers = getJWTuseridByStore();       

            $log.log('XYPersonalGenomeCreateCtrl');
            XYPersonalGenomeCreateCtrl.createPersonalGenome = function () {
                XYPersonalGenomeCreateCtrl.PersonalGenome = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                    outputparams: JSON.stringify(data2, null, 4),*/
                    
                    personalgenomename: XYPersonalGenomeCreateCtrl.PersonalGenome.personalgenomename,encode: XYPersonalGenomeCreateCtrl.PersonalGenome.encode, type: XYPersonalGenomeCreateCtrl.PersonalGenome.type
};
                
                $log.log(XYPersonalGenomeCreateCtrl.PersonalGenome);
                
                Personalgenome.create(XYPersonalGenomeCreateCtrl.PersonalGenome, function () {
                    $log.log('Success after PersonalgenomeCreate');
                    $location.path('/XYPersonalgenomeList');
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };

//Inputparams part
        });

