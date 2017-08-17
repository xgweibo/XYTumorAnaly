'use strict';

var workflowIndexModule = angular.module('workflowapp.WorkflowIndex');
workflowIndexModule.controller('XYTumorAnalyCtrl',
        function ($scope, Diseasedb, Personalgenome, Order1, $log, $uibModal, ISDEBUG, $location) {
            var XYTumorAnalyCtrl = this;
            var is_debug = ISDEBUG;
            $scope.status = {};
            $scope.status.open = false;
            $scope.tao = "weibo";
            $scope.idselected = null;
            $scope.selectrow = function (tarid, in_num) {
                $scope.idselected = tarid;
                $scope.idselected.index = in_num;
                $log.log('selectrow:' + in_num);
            };

            var LoadFirstPage = function () {
                $log.log("XYGENElateList:Load First Page");
                XYTumorAnalyCtrl.allorder1s = Order1.query(function (response) {
                    $log.log("Response:" + response);
                    $log.log("XYTumorAnalyCtrl:(Succ)" + response);//JSON.parse(
                }, function (error) {
                    $log.log("XYTumorAnalyCtrl:(Error)" + error);
                });
            };
            $log.log('XYTumorAnalyCtrl');
            XYTumorAnalyCtrl.createPersonOrder = function () {
                XYTumorAnalyCtrl.Personorder = {
                    /*inputparams: JSON.stringify(data1, null, 4),
                     outputparams: JSON.stringify(data2, null, 4),*/

                    genomename: XYTumorAnalyCtrl.Personorder.genomename, dataname: XYTumorAnalyCtrl.Personorder.dataname};

                $log.log(XYTumorAnalyCtrl.Personorder);

                Order1.create(XYTumorAnalyCtrl.Personorder, function () {
                    $log.log('Success after ComponentCreate');
                    $location.path('/XYGeneOrder');
                }, function (err) {
                    $log.log('err:' + err);
                });
                $log.log('Success after post');
            };

            LoadFirstPage();
//    $scope.animationsEnabled = true;
            XYTumorAnalyCtrl.opengenome = function () {
                //The login is automatically invoked.
                var GenomeModalInstance = $uibModal.open({
                    animation: XYTumorAnalyCtrl.animationsEnabled,
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYChooseGenome.html',
                    controller: 'XYChooseGenomeCtrl',
                    controllerAs: 'xycgc',
                    keyboard: true,
                    backdrop: 'static',
                    size: 'size',
                    resolve: {
                        Pername: function () {
                            return XYTumorAnalyCtrl.allpersonalgenomes;
                        }//,
                        //myUserWS: function()
                        //{
                        //    return UserWS;
                        //}
                    }
                });
                GenomeModalInstance.opened.then(function (selectpername) {// 模态窗口打开之后执行的函数  
                    console.log('Choose Personal genome modal is opened');
                    XYTumorAnalyCtrl.selected = selectpername;
                });
                GenomeModalInstance.result.then(function (result) {
                    console.log(result);
                    XYTumorAnalyCtrl.selected1 = result;
                }, function (reason) {
                    console.log(reason);// 点击空白区域，总会输出backdrop  
                    // click，点击取消，则会暑促cancel  
                    $log.info('Modal dismissed at: ' + new Date());
                });

            };
            XYTumorAnalyCtrl.opendata = function () {
                //The login is automatically invoked.
                var GenomeModalInstance = $uibModal.open({
                    animation: XYTumorAnalyCtrl.animationsEnabled,
                    templateUrl: 'pers/2tong/systemContentAdmin/templs/systemB/XYChooseData.html',
                    controller: 'XYChooseDataCtrl',
                    controllerAs: 'xycdc',
                    keyboard: true,
                    backdrop: 'static',
                    size: 'size',
                    resolve: {
                        Pername: function () {
                            return XYTumorAnalyCtrl.alldiseasedbs;
                        }
                    }
                });
                GenomeModalInstance.opened.then(function (selectdata) {// 模态窗口打开之后执行的函数  
                    console.log('Choose disease database modal is opened');
                    XYTumorAnalyCtrl.selected = selectdata;
                });
                GenomeModalInstance.result.then(function (result) {
                    console.log(result);
                    XYTumorAnalyCtrl.selected2 = result;
                }, function (reason) {
                    console.log(reason);// 点击空白区域，总会输出backdrop  
                    // click，点击取消，则会暑促cancel  
                    $log.info('Disease Database Modal dismissed at: ' + new Date());
                });

            };
        });