'use strict';
angular.module('spesaApp')
  .controller('FactorycontrollerCtrl', [
    '$scope', 'killerfactory',
    function ($scope, killerfactory) {
      killerfactory.listaGigs()
        .success(
          function (data) {
            $scope.gigs = data.posts;
          })
        .error(function () {
          $scope.gigs = 'errore';
        });
      $scope.greet = function () {
        return 'Saluti da Factory Controller';
      };
      $scope.username = 'vuoto';
      $scope.$watch('username', function () {
        $scope.appare = 'ecco la apppariciono';
      });
    }
  ]);