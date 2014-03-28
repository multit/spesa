'use strict';

angular.module('spesaApp')
  .controller('KillerCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.listaGigs = 'Ecco la lista';

    $http({
      method: 'JSONP',
      url: 'http://www.monokings.com/api/get_posts?callback=JSON_CALLBACK'
    }).success(function (data) {
      $scope.listaGigs = data.posts;
    }).error(function (status) {
      $scope.listaGigs = 'errore: ' + status;
    });

  });