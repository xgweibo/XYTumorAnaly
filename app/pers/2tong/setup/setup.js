'use strict';

angular.module('myApp.setup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SystemA/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlA'
  })
                .when('/SystemB/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlB'
  })
                .when('/SystemC/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlC'
  })
                .when('/SystemD/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlD'
  })
                .when('/SystemE/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlE'
  })
                .when('/SystemF/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlF'
  })
                .when('/SystemG/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlG'
  })
                .when('/SystemH/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlH'
  })
                .when('/SystemI/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlI'
  })
                .when('/SystemJ/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlJ'
  })
                .when('/SystemK/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlK'
  })
                .when('/SystemL/signup', {
    templateUrl: 'pers/2tong/setup/setup.html',
    controller: 'SetupCtrlL'
  });
}])

.controller('SetupCtrlA',function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    $scope.path="pers/2tong/IMG/background_systemA.jpg";
    $scope.systemname='个人基因组测序数据分析工作流系统';
    $scope.loginpath = "#!/SystemA/login";
    $scope.signuppath ="#!/SystemA/signup";
    $scope.systemsql="systemA";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        location.href='systemA/admin.html';
                     }
                     else{
                        location.href='systemA/guest.html';
                     }
                }
                else{
                     $location.path('/SystemA/signup');
                }   
            }
        }
    };
    javascript:void(0);
})
.controller('SetupCtrlB', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemB.jpg";
    $scope.systemname='肿瘤基因组测序数据分析工作流系统';
    $scope.loginpath = "#!/SystemB/login";
    $scope.signuppath ="#!/SystemB/signup";
    $scope.systemsql="systemB";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        location.href='systemB/admin.html';
                     }
                     else{
                        location.href='systemB/guest.html';
                     }
                }
                else{
                     $location.path('/SystemB/signup');
                }   
            }
        }
    };
    javascript:void(0);
})
.controller('SetupCtrlC', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };

    $scope.path="pers/2tong/IMG/background_systemC.jpg";
    $scope.systemname='个人基因组注释系统';
    $scope.loginpath = "#!/SystemC/login";
    $scope.signuppath ="#!/SystemC/signup";
    $scope.systemsql="systemC";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        location.href='systemC/admin.html';
                     }
                     else{
                       location.href='systemC/guest.html';
                     }
                }
                else{
                     $location.path('/SystemC/signup');
                }   
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlD', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemD.jpg";
    $scope.systemname='家庭基因组测序数据分析工作流系统';
    $scope.loginpath = "#!/SystemD/login";
    $scope.signuppath ="#!/SystemD/signup";
    $scope.systemsql="systemD";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                         location.href='systemD/admin.html';
                     }
                     else{
                        location.href='systemD/guest.html';
                     }
                }
                else{
                     $location.path('/SystemD/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlE', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemE.jpg";
    $scope.systemname='家庭基因组注释系统';
    $scope.loginpath = "#!/SystemE/login";
    $scope.signuppath ="#!/SystemE/signup";
    $scope.systemsql="systemE";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        location.href='systemE/admin.html';
                     }
                     else{
                        location.href='systemE/guest.html';
                     }
                }
                else{
                     $location.path('/SystemE/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlF', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemF.jpg";
    $scope.systemname='肿瘤靶向用药指导基因检测系统';
    $scope.loginpath = "#!/SystemF/login";
    $scope.signuppath ="#!/SystemF/signup";
    $scope.systemsql="systemF";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;

    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        location.href='systemF/admin.html';
                     }
                     else{
                       location.href='systemF/guest.html';
                     }
                }
                else{
                     $location.path('/SystemF/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlG', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemG.jpg";
    $scope.systemname='植入胚胎前遗传诊断系统';
    $scope.loginpath = "#!/SystemG/login";
    $scope.signuppath ="#!/SystemG/signup";
    $scope.systemsql="systemG";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                         location.href='systemG/admin.html';
                     }
                     else{
                         location.href='systemG/guest.html';
                     }
                }
                else{
                     $location.path('/SystemG/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlH', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    $scope.path="pers/2tong/IMG/background_systemH.jpg";
    $scope.systemname='新生儿遗传病基因检测系统';
    $scope.loginpath = "#!/SystemH/login";
    $scope.signuppath ="#!/SystemH/signup";
    $scope.systemsql="systemH";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                         location.href='systemH/admin.html';
                     }
                     else{
                         location.href='systemH/guest.html';
                     }
                }
                else{
                     $location.path('/SystemH/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlI', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemI.jpg";
    $scope.systemname='个人基因组药物反应预测系统';
    $scope.loginpath = "#!/SystemI/login";
    $scope.signuppath ="#!/SystemI/signup";
    $scope.systemsql="systemI";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                         location.href='systemI/admin.html';
                     }
                     else{
                         location.href='systemI/guest.html';
                     }
                }
                else{
                     $location.path('/SystemI/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlJ', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemJ.jpg";
    $scope.systemname='基于个人基因组的健康规划系统';
    $scope.loginpath = "#!/SystemJ/login";
    $scope.signuppath ="#!/SystemJ/signup";
    $scope.systemsql="systemJ";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        location.href='systemJ/admin.html';
                     }
                     else{
                        location.href='systemJ/guest.html';
                     }
                }
                else{
                     $location.path('/SystemJ/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlK', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemK.jpg";
    $scope.systemname='个人基因组测序质量控制系统';
    $scope.loginpath = "#!/SystemK/login";
    $scope.signuppath ="#!/SystemK/signup";
    $scope.systemsql="systemK";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;

    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        location.href='systemK/admin.html';
                     }
                     else{
                        location.href='systemK/guest.html';
                     }
                }
                else{
                     $location.path('/SystemK/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
})
.controller('SetupCtrlL', function($scope,Users,$location) {
    $scope.userinfo = {
        email: '',
        password: '',
        confirmpassword:'',
        category:''
    };
    
    $scope.path="pers/2tong/IMG/background_systemL.jpg";
    $scope.systemname='个人基因组疾病风险预测系统';
    $scope.loginpath = "#!/SystemL/login";
    $scope.signuppath ="#!/SystemL/signup";
    $scope.systemsql="systemL";
    $scope.errormsg='';
    
    $scope.allusers = Users.query();
    $scope.tag=0;
    
    $scope.signup = function(){
       if(document.getElementById('test').selectedIndex === 0){
           $scope.userinfo.category = "admin";
       }
       else{
           $scope.userinfo.category = "guest";
       }
       
        var sum = $scope.allusers.length;
        for(var i=0;i<sum;i++){
            var oneuser = $scope.allusers[i];
            if($scope.userinfo.email == oneuser.email && $scope.userinfo.category == oneuser.category && $scope.systemsql == oneuser.system){
                $scope.errormsg = '#邮箱已被注册';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#两次输入密码不一致';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                         location.href='systemL/admin.html';
                     }
                     else{
                          location.href='systemL/guest.html';
                     }
                }
                else{
                     $location.path('/SystemK/signup');
                }  
            }
        }
    };
    
    javascript:void(0);
});