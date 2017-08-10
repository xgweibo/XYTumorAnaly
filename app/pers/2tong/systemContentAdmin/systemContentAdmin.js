'use strict';

angular.module('myApp.systemContentAdmin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SystemA/contentAdmin', {
    templateUrl: 'pers/2tong/login/login.html',
    controller: 'SystemContentAdminCtrlA'
  })
                .when('/SystemB/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlB'
  })
                .when('/SystemC/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlC'
  })
                .when('/SystemD/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlD'
  })
                .when('/SystemE/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlE'
  })
                 .when('/SystemF/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlF'
  })
                 .when('/SystemG/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlG'
  })
                 .when('/SystemH/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlH'
  })
                .when('/SystemI/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlI'
  })
                .when('/SystemJ/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlJ'
  })
                .when('/SystemK/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlK'
  })
                .when('/SystemL/contentAdmin', {
    templateUrl: 'pers/2tong/systemContentAdmin/systemContentAdmin.html',
    controller: 'SystemContentAdminCtrlL'
  });
}])

.controller('SystemContentAdminCtrlA', function($scope,Users,User,$location) {
    $scope.systemname = 'System A';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemA/login";
})
.controller('SystemContentAdminCtrlB', function($scope,Users,User,$location) {
    $scope.systemname = 'System B';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemB/login";
})
.controller('SystemContentAdminCtrlC', function($scope,Users,User,$location) {
    $scope.systemname = 'System C';
    $scope.allusers = Users.query();
    $scope.logoutpath ="#!/SystemC/login";
})
.controller('SystemContentAdminCtrlD', function($scope,Users,User,$location) {
    $scope.systemname = 'System D';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemD/login";
})
.controller('SystemContentAdminCtrlE', function($scope,Users,User,$location) {
    $scope.systemname = 'System E';
    $scope.allusers = Users.query();
    $scope.logoutpath = '#!/SystemE/login';
})
.controller('SystemContentAdminCtrlF', function($scope,Users,User,$location) {
    $scope.systemname = 'System F';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemF/login";
})
.controller('SystemContentAdminCtrlG', function($scope,Users,User,$location) {
    $scope.systemname = 'System G';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemG/login";
})
.controller('SystemContentAdminCtrlH', function($scope,Users,User,$location) {
    $scope.systemname = 'System H';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemH/login";
})
.controller('SystemContentAdminCtrlI', function($scope,Users,User,$location) {
    $scope.systemname = 'System I';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemI/login";
})
.controller('SystemContentAdminCtrlJ', function($scope,Users,User,$location) {
    $scope.systemname = 'System J';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemJ/login";
})
.controller('SystemContentAdminCtrlK', function($scope,Users,User,$location) {
    $scope.systemname = 'System K';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemK/login";
})
.controller('SystemContentAdminCtrlL', function($scope,Users,User,$location) {
    $scope.systemname = 'System L';
    $scope.allusers = Users.query();
    $scope.logoutpath = "#!/SystemL/login";
})
;