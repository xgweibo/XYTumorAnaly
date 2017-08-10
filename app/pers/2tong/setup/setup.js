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
    $scope.systemname='System A';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemA/contentAdmin');
                     }
                     else{
                          $location.path('/SystemA/contentGuest');
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
    $scope.systemname='System B';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemB/contentAdmin');
                     }
                     else{
                          $location.path('/SystemB/contentGuest');
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
    $scope.systemname='System C';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemC/contentAdmin');
                     }
                     else{
                          $location.path('/SystemC/contentGuest');
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
    $scope.systemname='System D';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemD/contentAdmin');
                     }
                     else{
                          $location.path('/SystemD/contentGuest');
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
    $scope.systemname='System E';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemE/contentAdmin');
                     }
                     else{
                          $location.path('/SystemE/contentGuest');
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
    $scope.systemname='System F';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemF/contentAdmin');
                     }
                     else{
                          $location.path('/SystemF/contentGuest');
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
    $scope.systemname='System G';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemG/contentAdmin');
                     }
                     else{
                          $location.path('/SystemG/contentGuest');
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
    $scope.systemname='System H';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemH/contentAdmin');
                     }
                     else{
                          $location.path('/SystemH/contentGuest');
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
    $scope.systemname='System I';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemI/contentAdmin');
                     }
                     else{
                          $location.path('/SystemI/contentGuest');
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
    $scope.systemname='System J';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemJ/contentAdmin');
                     }
                     else{
                          $location.path('/SystemJ/contentGuest');
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
    $scope.systemname='System K';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemK/contentAdmin');
                     }
                     else{
                          $location.path('/SystemK/contentGuest');
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
    $scope.systemname='System L';
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
                $scope.errormsg = '#Email already exists';
                $scope.tag = 1;
                break;
            }
        }
        if($scope.tag == 0){
            if($scope.userinfo.password != $scope.userinfo.confirmpassword){
                $scope.errormsg='#Please confirm the password again';
            }
            else{
                sum=sum+1;
                $scope.temp = new Users({id:sum,email:$scope.userinfo.email,password:$scope.userinfo.password,category:$scope.userinfo.category,system:$scope.systemsql});
                $scope.temp.$save();
                var choose = confirm("Welcome, new "+$scope.userinfo.category+" : "+ $scope.userinfo.email+" !\n\ Would u want to log in now?");
                if(choose == true){
                     if($scope.userinfo.category == "admin"){
                        $location.path('/SystemK/contentAdmin');
                     }
                     else{
                          $location.path('/SystemK/contentGuest');
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