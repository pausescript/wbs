'use strict';

/**
 * @ngdoc overview
 * @name angularExerciseApp
 * @description
 * # angularExerciseApp
 *
 * Main module of the application.
 */
angular
  .module('BWSApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'BWSHomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
