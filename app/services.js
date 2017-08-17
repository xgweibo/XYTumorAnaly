/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('myApp.services',['ngResource'])
        .factory('Users',function($resource){
         return $resource('http://localhost:8080/BackEndLogin06/webresources/userinfos',{},{
           query: {method:'GET',isArray:true}
       });})
   
        .factory('User',['$resource',function($resource){
         return $resource('http://localhost:8080/BackEndLogin06/webresources/userinfos/:id',null,{
           update: {method:'PUT'}
       });}])
       
        .factory('GeneInfos',function($resource){
         return $resource('localhost:8080/BackEndLogin06/webresources/geneinfos/:id',{},{
           query: {method:'GET',isArray:true},
           create: {method: 'POST'},
           update: {method: 'PUT'},
           delme: {method: 'DELETE'}
       });});

   


