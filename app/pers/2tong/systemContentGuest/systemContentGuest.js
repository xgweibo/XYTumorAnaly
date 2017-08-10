'use strict';

angular.module('myApp.systemContentGuest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SystemA/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlA'
  })
                .when('/SystemB/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlB'
  })
                .when('/SystemC/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlC'
  })
                .when('/SystemD/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlD'
  })
                .when('/SystemE/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlE'
  })
                .when('/SystemF/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlF'
  })
                .when('/SystemG/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlG'
  })
                .when('/SystemH/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlH'
  })
                .when('/SystemI/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlI'
  })
                .when('/SystemJ/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlJ'
  })
                .when('/SystemK/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlK'
  })
                .when('/SystemL/contentGuest', {
    templateUrl: 'pers/2tong/systemContentGuest/systemContentGuest.html',
    controller: 'SystemContentGuestCtrlL'
  });
}])

.controller('SystemContentGuestCtrlA', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System A';
    $scope.logoutpath = "#!/SystemA/login";
})
.controller('SystemContentGuestCtrlB', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System B';
    $scope.logoutpath = "#!/SystemB/login";
})
.controller('SystemContentGuestCtrlC', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System C';
    $scope.logoutpath = "#!/SystemC/login";
})
.controller('SystemContentGuestCtrlD', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System D';
    $scope.logoutpath = "#!/SystemD/login";
})
.controller('SystemContentGuestCtrlE', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System E';
    $scope.logoutpath = "#!/SystemE/login";
})
.controller('SystemContentGuestCtrlF', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System F';
    $scope.logoutpath = "#!/SystemF/login";
})
.controller('SystemContentGuestCtrlG', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System G';
    $scope.logoutpath = "#!/SystemG/login";
})
.controller('SystemContentGuestCtrlH', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System H';
    $scope.logoutpath = "#!/SystemH/login";
})
.controller('SystemContentGuestCtrlI', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System I';
    $scope.logoutpath = "#!/SystemI/login";
})
.controller('SystemContentGuestCtrlJ', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System J';
    $scope.logoutpath = "#!/SystemJ/login";
})
.controller('SystemContentGuestCtrlK', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System K';
    $scope.logoutpath = "#!/SystemK/login";
})
.controller('SystemContentGuestCtrlL', function($scope,Users,User,$location) {
    $scope.allusers = Users.query();
    $scope.systemname = 'System L';
    $scope.logoutpath = "#!/SystemL/login";
});