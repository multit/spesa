'use strict';

angular.module('spesaApp')
  .controller('SpesaCtrl', function ($scope) {

    $scope.rimuoviProdotto = function (index) {
      $scope.prodottiDaAcquistare.lista.splice(index,1);
      console.log('Rimosso prodotto; ' + $scope.prodottiDaAcquistare.lista[index]);
    };
			
  });
