'use strict';

 angular.module('myApp.companyHome', ['ngRoute'])
         .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/companyHome', {
                templateUrl: 'pers/2tong/companyHome/companyHome.html',
                controller: 'CompanyHomeCtrl'
             });
        }])
         .controller('CompanyHomeCtrl', function ($scope) {
            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var addSlide = function () {
                slides.push({
                    image: 'http://lorempixel.com/600/300',
                    text: 'Image1',
                    id: 0
                });
                slides.push({
                    image: 'http://lorempixel.com/601/300',
                    text: 'Image2',
                    id: 1
                });
            };

            addSlide();
        });