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

.controller('SetupCtrlA',function($scope) {
    $scope.path="pers/2tong/IMG/background_systemA.jpg";
    $scope.systemname='System A';
    $scope.loginpath = "#!/SystemA/login";
    $scope.signuppath ="#!/SystemA/signup";

    javascript:void(0);
})
.controller('SetupCtrlB', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemB.jpg";
    $scope.systemname='System B';
    $scope.loginpath = "#!/SystemB/login";
    $scope.signuppath ="#!/SystemB/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlC', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemC.jpg";
    $scope.systemname='System C';
    $scope.loginpath = "#!/SystemC/login";
    $scope.signuppath ="#!/SystemC/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlD', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemD.jpg";
    $scope.systemname='System D';
    $scope.loginpath = "#!/SystemD/login";
    $scope.signuppath ="#!/SystemD/signup";

    javascript:void(0);
})
.controller('SetupCtrlE', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemE.jpg";
    $scope.systemname='System E';
    $scope.loginpath = "#!/SystemE/login";
    $scope.signuppath ="#!/SystemE/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlF', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemF.jpg";
    $scope.systemname='System F';
    $scope.loginpath = "#!/SystemF/login";
    $scope.signuppath ="#!/SystemF/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlG', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemG.jpg";
    $scope.systemname='System G';
    $scope.loginpath = "#!/SystemG/login";
    $scope.signuppath ="#!/SystemG/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlH', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemH.jpg";
    $scope.systemname='System H';
    $scope.loginpath = "#!/SystemH/login";
    $scope.signuppath ="#!/SystemH/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlI', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemI.jpg";
    $scope.systemname='System I';
    $scope.loginpath = "#!/SystemI/login";
    $scope.signuppath ="#!/SystemI/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlJ', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemJ.jpg";
    $scope.systemname='System J';
    $scope.loginpath = "#!/SystemJ/login";
    $scope.signuppath ="#!/SystemJ/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlK', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemK.jpg";
    $scope.systemname='System K';
    $scope.loginpath = "#!/SystemK/login";
    $scope.signuppath ="#!/SystemK/signup";
    
    javascript:void(0);
})
.controller('SetupCtrlL', function($scope) {
    $scope.path="pers/2tong/IMG/background_systemL.jpg";
    $scope.systemname='System L';
    $scope.loginpath = "#!/SystemL/login";
    $scope.signuppath ="#!/SystemL/signup";
    
    javascript:void(0);
});