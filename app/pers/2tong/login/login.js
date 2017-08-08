'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SystemA/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlA'
  })
         .when('/SystemB/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlB'
  })
          .when('/SystemC/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlC'
  })
         .when('/SystemD/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlD'
  })
        .when('/SystemE/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlE'
  })
        .when('/SystemF/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlF'
  })
        .when('/SystemG/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlG'
  })
        .when('/SystemH/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlH'
  })
        .when('/SystemI/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlI'
  })
        .when('/SystemJ/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlJ'
  })
        .when('/SystemK/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlK'
  })
        .when('/SystemL/login', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'LoginCtrlL'
  });
}])

.controller('LoginCtrlA', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemA.jpg";
    $scope.loginpath = "#!/SystemA/login";
    $scope.signuppath ="#!/SystemA/signup";
    $scope.systemname='System A';
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})

.controller('LoginCtrlB', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemB.jpg";
    $scope.systemname='System B';
    $scope.loginpath = "#!/SystemB/login";
    $scope.signuppath ="#!/SystemB/signup";
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlC', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemC.jpg";
    $scope.systemname='System C';
    $scope.loginpath = "#!/SystemC/login";
    $scope.signuppath ="#!/SystemC/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlD', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemD.jpg";
    $scope.systemname='System D';
    $scope.loginpath = "#!/SystemD/login";
    $scope.signuppath ="#!/SystemD/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlE', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemE.jpg";
    $scope.systemname='System E';
    $scope.loginpath = "#!/SystemE/login";
    $scope.signuppath ="#!/SystemE/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlF', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemF.jpg";
    $scope.systemname='System F';
    $scope.loginpath = "#!/SystemF/login";
    $scope.signuppath ="#!/SystemF/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlG', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemG.jpg";
    $scope.systemname='System G';
    $scope.loginpath = "#!/SystemG/login";
    $scope.signuppath ="#!/SystemG/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlH', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemH.jpg";
    $scope.systemname='System H';
    $scope.loginpath = "#!/SystemH/login";
    $scope.signuppath ="#!/SystemH/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlI', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemI.jpg";
    $scope.systemname='System I';
    $scope.loginpath = "#!/SystemI/login";
    $scope.signuppath ="#!/SystemI/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlJ', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemJ.jpg";
    $scope.systemname='System J';
    $scope.loginpath = "#!/SystemJ/login";
    $scope.signuppath ="#!/SystemJ/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})
.controller('LoginCtrlK', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemK.jpg";
    $scope.systemname='System K';
    $scope.loginpath = "#!/SystemK/login";
    $scope.signuppath ="#!/SystemK/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})

.controller('LoginCtrlL', function($scope) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemL.jpg";
    $scope.systemname='System L';
    $scope.loginpath = "#!/SystemL/login";
    $scope.signuppath ="#!/SystemL/signup";
    
    $scope.myReverse = function(){
        return $scope.msg.split("").reverse().join("");
    };
    $scope.setChoose = function(tab){
        $scope.choose = tab;
    };
    $scope.isSet = function(tab){
        return this.choose === tab;
    };
    $scope.login = function(){
       /**
        * AuthService.login(credentials).then(function (user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        },function(){
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
        */ 
       if(document.getElementById('test').selectedIndex === 0){
           $scope.credentials.category = "admin";
       }
       else{
           $scope.credentials.category = "guest";
       }
       if($scope.credentials.username === 'admin@163.com' && $scope.credentials.password === '12345' && $scope.credentials.category === "admin"){
           console.log($scope.credentials);
           alert("log in successfully!");
       }
       else{
           $scope.errormsg = $scope.credentials.username +" "+$scope.credentials.password+" "+$scope.credentials.category;
       }
    };
    javascript:void(0);
})

.constant('AUTH_EVENTS',{
    loginSuccess: 'auto-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES',{
    all: '*',
    admin: 'admin',
    guest: 'guest'
});
   