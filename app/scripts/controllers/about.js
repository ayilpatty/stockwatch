'use strict';

/**
 * @ngdoc function
 * @name stockWatcherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stockWatcherApp
 */
angular.module('stockWatcherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
