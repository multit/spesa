'use strict';

angular.module('spesaApp')
  .controller('AcquistiCtrl', [ '$scope', 'spesaFactory', function ($scope,spesaFactory) {
	

	$scope.aggiungiProdotto = function (id) {
			spesaFactory.queryProdotti('insert','GET',id).success (function () {
				console.log('query riuscita, id: ' + id);
			});
		};

	$scope.updateProdotti = function () {
		spesaFactory.queryProdotti('select').success (function (data) {
			$scope.prodottiAcquistabili = data.lista;
		});
	};
		
	$scope.updateProdotti();

}]);