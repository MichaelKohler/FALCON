'use strict';

/**
 * @ngdoc overview
 * @name falconApp
 * @description
 * # falconApp
 *
 * Main module of the application.
 */
angular
  .module('falconApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
