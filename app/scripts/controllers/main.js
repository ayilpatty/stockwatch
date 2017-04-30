'use strict';

/**
 * @ngdoc function
 * @name stockWatcherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockWatcherApp
 */
angular.module('stockWatcherApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
