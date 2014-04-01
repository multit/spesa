'use strict';

angular.module('spesaApp')
  .controller('AcquistiCtrl', function ($scope) {
    $scope.prodottiAcquistabili = {
		  lista: [
        { val : 'Prosciuttone'},
        { val : 'Formaggio'},
        { val : 'Nescafe'}
      ]
    };
		$scope.aggiungiProdotto = function (index) {
      
      $scope.prodottiDaAcquistare.lista.push($scope.prodottiAcquistabili.lista[index]);
			console.log('Cambiato l\'elenco' + $scope.prodottiAcquistabili.lista[index]);
		};
  });
