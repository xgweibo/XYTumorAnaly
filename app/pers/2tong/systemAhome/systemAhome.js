'use strict';

 angular.module('myApp.systemAhome', ['ngRoute'])
         .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/systemAhome', {
                templateUrl: 'pers/2tong/systemAhome/systemAhome.html',
                controller: 'SystemAhomeCtrl'
             });
        }])
         .controller('SystemAhomeCtrl', function ($scope) {
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