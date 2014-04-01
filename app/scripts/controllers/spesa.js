'use strict';

angular.module('spesaApp')
  .controller('SpesaCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.rimuoviProdotto = function (index) {
      $scope.prodottiDaAcquistare.lista.splice(index,1);
      console.log('Rimosso prodotto; ' + $scope.prodottiDaAcquistare.lista[index]);
    };
			
  });
