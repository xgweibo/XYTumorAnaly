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

.controller('LoginCtrlA', function($scope,Users,$location) {
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
    $scope.systemsql="systemA";
    $scope.allusers = Users.query();
    $scope.tag=0;
    
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
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemA/contentAdmin');
                     }
                     else{
                          $location.path('/SystemA/contentGuest');
                     }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
        
    };
    javascript:void(0);
})

.controller('LoginCtrlB', function($scope,Users,$location) {
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
    $scope.systemsql="systemB";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
 var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemB/contentAdmin');
                     }
                    else{
                          $location.path('/SystemB/contentGuest');
                     }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlC', function($scope,Users,$location) {
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
    $scope.systemsql="systemC";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
       var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemC/contentAdmin');
                     }
                     else{
                          $location.path('/SystemC/contentGuest');
                     }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlD', function($scope,Users,$location) {
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
    $scope.systemsql="systemD";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemD/contentAdmin');
                     }
                     else{
                          $location.path('/SystemD/contentGuest');
                     }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlE', function($scope,Users,$location) {
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
    $scope.systemsql="systemE";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemE/contentAdmin');
                     }
                     else{
                          $location.path('/SystemE/contentGuest');
                     }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlF', function($scope,Users,$location) {
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
    $scope.systemsql="systemF";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
       var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemF/contentAdmin');
                    }
                    else{
                          $location.path('/SystemF/contentGuest');
                    }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlG', function($scope,Users,$location) {
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
    $scope.systemsql="systemG";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemG/contentAdmin');
                    }
                    else{
                          $location.path('/SystemG/contentGuest');
                    }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlH', function($scope,Users,$location) {
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
    $scope.systemsql="systemH";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemH/contentAdmin');
                    }
                    else{
                          $location.path('/SystemH/contentGuest');
                    }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlI', function($scope,Users,$location) {
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
    $scope.systemsql="systemI";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemI/contentAdmin');
                    }
                    else{
                          $location.path('/SystemI/contentGuest');
                    }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlJ', function($scope,Users,$location) {
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
    $scope.systemsql="systemJ";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
       var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemJ/contentAdmin');
                    }
                    else{
                          $location.path('/SystemJ/contentGuest');
                    }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlK', function($scope,Users,$location) {
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
    $scope.systemsql="systemK";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
       var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemK/contentAdmin');
                     }
                     else{
                          $location.path('/SystemK/contentGuest');
                     }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
        }
    };
    javascript:void(0);
})

.controller('LoginCtrlL', function($scope,Users,$location) {
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
    $scope.systemsql="systemL";
    $scope.allusers = Users.query();
    $scope.tag=0;  
    
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
       var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.credentials.username == oneuser.email && $scope.credentials.category == oneuser.category && $scope.systemsql == oneuser.system){
                if($scope.credentials.password == oneuser.password){
                    console.log($scope.credentials);
                    alert("Welcome, "+$scope.credentials.category+" "+$scope.credentials.username+" !");
                    if($scope.credentials.category == "admin"){
                        $location.path('/SystemL/contentAdmin');
                     }
                     else{
                          $location.path('/SystemL/contentGuest');
                     }
                }
                else{
                    $scope.errormsg = '#Password Wrong';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#Email Wrong';
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
   