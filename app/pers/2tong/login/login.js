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

.controller('LoginCtrlA', function($scope,Users) {
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
    $scope.systemname='个人基因组测序数据分析工作流系统';
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
                        location.href='systemA/admin.html';
                     }
                     else{
                       location.href='systemA/guest.html';
                     }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
        
    };
    javascript:void(0);
})

.controller('LoginCtrlB', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemB.jpg";
    $scope.systemname='肿瘤基因组测序数据分析工作流系统';
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
                        location.href='tumoranalyindex.html';
                     }
                    else{
                       location.href='systemB/guest.html';
                     }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlC', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemC.jpg";
    $scope.systemname='个人基因组注释系统';
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
                         location.href='systemC/admin.html';
                     }
                     else{
                        location.href='systemC/guest.html';
                     }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlD', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemD.jpg";
    $scope.systemname='家庭基因组测序数据分析工作流系统';
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
                        location.href='systemD/admin.html';
                     }
                     else{
                        location.href='systemD/guest.html';
                     }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlE', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemE.jpg";
    $scope.systemname='家庭基因组注释系统';
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
                        location.href='systemE/admin.html';
                     }
                     else{
                       location.href='systemE/guest.html';
                     }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlF', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemF.jpg";
    $scope.systemname='肿瘤靶向用药指导基因检测系统';
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
                        location.href='tumordrugindex.html';
                    }
                    else{
                        location.href='systemF/guest.html';
                    }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#E邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlG', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemG.jpg";
    $scope.systemname='植入胚胎前遗传诊断系统';
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
                        location.href='systemG/admin.html';
                    }
                    else{
                        location.href='systemG/guest.html';
                    }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlH', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemH.jpg";
    $scope.systemname='新生儿遗传病基因检测系统';
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
                        location.href='systemH/admin.html';
                    }
                    else{
                        location.href='systemH/guest.html';
                    }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlI', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemI.jpg";
    $scope.systemname='个人基因组药物反应预测系统';
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
                        location.href='systemI/admin.html';
                    }
                    else{
                        location.href='systemI/guest.html';
                    }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlJ', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemJ.jpg";
    $scope.systemname='基于个人基因组的健康规划系统';
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
                        location.href='systemJ/admin.html';
                    }
                    else{
                        location.href='systemJ/guest.html';
                    }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})
.controller('LoginCtrlK', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemK.jpg";
    $scope.systemname='个人基因组测序质量控制系统';
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
                          location.href='systemK/admin.html';
                     }
                     else{
                          location.href='systemK/guest.html';
                     }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
        }
    };
    javascript:void(0);
})

.controller('LoginCtrlL', function($scope,Users) {
    $scope.credentials = {
        username: '',
        password: '',
        category:''
    };
    $scope.msg="";
    $scope.errormsg="";
    $scope.path="pers/2tong/IMG/background_systemL.jpg";
    $scope.systemname='个人基因组疾病风险预测系统';
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
                        location.href='admin.html';
                     }
                     else{
                        location.href='systemL/guest.html';
                     }
                }
                else{
                    $scope.errormsg = '#密码错误';
                }
                $scope.tag = 1;
                break;
             }
         }
        if($scope.tag == 0){
            $scope.errormsg = '#邮箱尚未注册';
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
   