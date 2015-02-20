'use strict';

/**
 * @ngdoc function
 * @name falconApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the falconApp
 */
angular.module('falconApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
