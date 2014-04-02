'use strict';

angular.module('spesaApp')
  .controller('SpesaCtrl', [ '$scope', 'spesaFactory', function ($scope,spesaFactory) {


	$scope.rimuoviProdotto = function (id) {

		spesaFactory.queryProdotti('delete','GET',id).success (function () {
			console.log('query riuscita');
			$scope.updateSpesa();
		});
	};

	$scope.updateSpesa = function () {
		spesaFactory.queryProdotti('select_spesa').success (function (data) {
			$scope.prodottiDaAcquistare = data.lista;
		});
	};
		
	$scope.updateSpesa();
	
}]);