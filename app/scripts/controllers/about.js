'use strict';

/**
 * @ngdoc function
 * @name falconApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the falconApp
 */
angular.module('falconApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
