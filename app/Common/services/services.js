/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
var commonModule = angular.module('XYWorkbench.Common');

commonModule.constant('ISDEBUG', true);//!!192.168.153.123//192.168.153.8//localhost


//Utility for Transforming Options into HashTable
commonModule.service('BuildHashTable', function () {
    var _OptionListIn = null;
    this.getHashTable = function (tarOptionList) {
        _OptionListIn = tarOptionList;
        var opaction_obj = {};
        for (var i = 0; i < _OptionListIn.length; i++) {
            //$log.log('value:'+ _OptionListIn[i].value +' name:'+ _OptionListIn[i].name);
            opaction_obj[_OptionListIn[i].value] = _OptionListIn[i].name;
        }
        return opaction_obj;
    }
});

commonModule.service('MapValue2Txt', function () {
    var _orderStatusMapTable = null;//VTYPEMAPTABLE;
    this.getTxt = function (HashTable_in, status_in) {
        _orderStatusMapTable = HashTable_in;
        if (status_in in _orderStatusMapTable)
            return _orderStatusMapTable[status_in];
        else
            return '状态异常(编号:' + status_in + ')';
    }
});

//Usage: WFCmpntParamsCreateCtrl
commonModule.value('DIRECTIONOPTIONS',
        [{value: 0, name: 'Input Direction'},
            {value: 1, name: 'Output Direction'}]);

commonModule.factory('DIRMAPTABLE', function (DIRECTIONOPTIONS, BuildHashTable) {
    return BuildHashTable.getHashTable(DIRECTIONOPTIONS);
});

//Usage: WFCmpntParamsCreateCtrl
commonModule.value('VALUETYPEOPTIONS',
        [{value: 0, name: 'EMPTY'},
            {value: 1, name: 'String'},
            {value: 2, name: 'Integer'},
            {value: 3, name: 'Real'}]);

commonModule.factory('VTYPEMAPTABLE', function (VALUETYPEOPTIONS, BuildHashTable) {
    return BuildHashTable.getHashTable(VALUETYPEOPTIONS);
});

//Usage: WFCmpntParamsCreateCtrl
commonModule.value('PARAMTYPEOPTIONS',
        [{value: 0, name: 'String'},
            {value: 1, name: 'File'},
            {value: 2, name: 'Standard Input'},
            {value: 3, name: 'Standard Output'}]);

commonModule.factory('PTYPEMAPTABLE', function (PARAMTYPEOPTIONS, BuildHashTable) {
    return BuildHashTable.getHashTable(PARAMTYPEOPTIONS);
});

/*-------Columns for Component Parameter--------------*/
/*
commonModule.value('CMPNTPARAMCOLUMNS1',
        [{field: 'paramname', name: 'Name', enableCellEdit: true},
            {field: 'direction', name: 'Direction'},
            {field: 'comment', name: 'Comment'},
            {field: 'valtype', name: 'Value Type'},
            {field: 'paramtype', name: 'Parameter Type'},
            {field: 'prefix', name: 'Prefix'},
            {field: 'post', name: 'Position'},
            {field: 'defaultval', name: 'Default Value'}]);

commonModule.value('CMPNTPARAMCOLUMNS2',
        [{field: 'paramname', name: 'Name', enableCellEdit: true},
            {field: 'direction', name: 'Direction'},
            {field: 'comment', name: 'Comment'},
            {field: 'valtype', name: 'Value Type'},
            {field: 'paramtype', name: 'Parameter Type'},
            {field: 'prefix', name: 'Prefix'},
            {field: 'post', name: 'Position'},
            {field: 'defaultval', name: 'Default Value'}]);

commonModule.factory('GridRowData', function () {
    var gridRowFunc = {};
    gridRowFunc.addNewRow = function (gridColumnIn) {
        var newRowData = {};
        for (var i = 0; i < gridColumnIn.length; i++) {
            newRowData[ gridColumnIn[i].field ] = "";
        }
        return newRowData;
    };

    return gridRowFunc;
});
*/



/*---------BackendAddr for XYWorkflowServer------------*/
commonModule.factory('WFBackendAddr', function (ISDEBUG) {
    var backend_addr = '';
    var backend_config_tar = {};

    var backend_config_debug = {
        backend_host: 'localhost', //localhost
        //backend_name: 'XYWorkflowServer',
        backend_name: 'XYSampleServer2',
        
        backend_port: '8080' //8080
    };

    var backend_config_production = {
        backend_host: 'store.test.nebulagene.com',
        backend_name: 'XYGeneStoreServer',
        backend_port: '18080'
    };

    if (ISDEBUG)
        backend_config_tar = backend_config_debug;
    else
        backend_config_tar = backend_config_production;

    backend_addr = 'http://' + backend_config_tar.backend_host + ':' +
            backend_config_tar.backend_port + '/' +
            backend_config_tar.backend_name + '/' +
            'webresources';

    return backend_addr;
});

commonModule.factory('FrontHomePageAddr', function (ISDEBUG) {
    var front_homepage = '';
    if (ISDEBUG)
        front_homepage = '/XYGeneStoreClient/index.html';
    else
        front_homepage = '/';
    return front_homepage;

});
/*
 * Resource default methods:
 * { 'get':    {method:'GET'},
 'save':   {method:'POST'}, 
 #### PL####NOTICE
 ####it's different from our update{method:PUT} !!!
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'} };
 */

/*-------filter:get full list by page---------*/

/*-------------------------------
 *      Workflow Server
 * -----------------------------*/

commonModule.factory('OpuserAuthen', function ($resource, WFBackendAddr) {//WSADDRESS,BACKENDNAME,BACKENDPORT){   
    //return $resource('http://'+WSADDRESS+':'+BACKENDPORT+'/'+BACKENDNAME+'/webresources/opuserlist/token',{},{        
    return $resource(WFBackendAddr + '/opusers/token', {}, {
        login: {method: 'POST'
                    //Due to Angular-JWT, if it's not required token in OPTIONS request,
                    //the following propety is required. Otherwise, the GET/POST request
                    //will be rejected.
            , skipAuthorization: true}
    });
});

commonModule.factory('WFComponentWS', function ($resource, WFBackendAddr) {
    return $resource(WFBackendAddr + '/wfcomponents/:id', {}, {
        create: {method: 'POST'},
        update: {method: 'PUT'},
        delme: {method: 'DELETE'}
    });
});

commonModule.factory('WFCmpntParamWS', function ($resource, WFBackendAddr) {
    return $resource(WFBackendAddr + '/wfcmpntparams/:action/:id', {}, {
        create: {method: 'POST'},
        update: {method: 'PUT'},
        delme: {method: 'DELETE'}
    });
});

commonModule.factory('getJWTuseridByStore', function (store, jwtHelper) {
    return function () {
        var JWToken = store.get('jwt_opuser');
        var tokenPayload = jwtHelper.decodeToken(JWToken);
        return tokenPayload.userid;
    };
});
