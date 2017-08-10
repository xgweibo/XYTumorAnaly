'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope,Users,User) {
    $scope.allusers = Users.query();
    $scope.userinfo={
        email:"",
        password:"",
        category:""
    };
    $scope.errormsg ='';
    $scope.tag = 0;
    $scope.temp;
    $scope.test;
    $scope.login = function(){
         var sum = $scope.allusers.length;
         for(var i=0;i<sum;i++){
             var oneuser = $scope.allusers[i];
             if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category){
                 if($scope.userinfo.password == oneuser.password){
                      $scope.errormsg = "log in ";
                 }
                 else{
                      $scope.errormsg = "password wrong";
                 }
                 $scope.tag = 1;
                 break;
             }
         }
         if($scope.tag == 0){
             $scope.errormsg = "email wrong";
         }
    };
    $scope.signup = function(){
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
             var oneuser = $scope.allusers[i];
             if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category){
                 $scope.errormsg = "emial has been used to sign up as "+ $scope.userinfo.category;
                 $scope.tag = 1;
                 break;
             }
        }
        if($scope.tag == 0){
            sum=sum+1;
            $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category});
            $scope.temp.$save();
        }
    };
    $scope.updatepassword = function(){
         var sum = $scope.allusers.length;
         for(var i=0;i<sum;i++){
             var oneuser = $scope.allusers[i];
             if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category){
                 var idTemp = i+1;
                 $scope.temp = User.get({ id: idTemp});
                 $scope.temp.password = $scope.userinfo.password;
                 $scope.temp.id = idTemp;
                 $scope.temp.email= $scope.userinfo.email;
                 $scope.temp.category = $scope.userinfo.category;
                 User.update({ id:$scope.temp.id }, $scope.temp);
                //$scope.temp.$save();
             }
        }
    }
    javascript:void(0);
});