'use strict';

angular.module('spesaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'spesa/spesa.html',
        controller: 'SpesaCtrl'
      })
      .when('/acquisti', {
        templateUrl: 'acquisti/acquisti.html',
        controller: 'AcquistiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    return $locationProvider.html5Mode(!window.cordova);
  });
