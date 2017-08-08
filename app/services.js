/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('myApp.services',['ngResource'])
        .factory('Users',function($resource){
         return $resource('http://localhost:8080/BackEndLogin03/webresources/userinfos',{},{
           query: {method:'GET',isArray:true}
       })})
   
        .factory('User',['$resource',function($resource){
         return $resource('http://localhost:8080/BackEndLogin03/webresources/userinfos/:id',null,{
           update: {method:'PUT'}
       });}]);

   


