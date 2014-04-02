'use strict';

angular.module('spesaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider,$locationProvider,$httpProvider) {
	
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
})

.controller ('appController', [ '$scope', 'spesaFactory', function($scope,spesaFactory) {

	/*$scope.prodottiDaAcquistare = {
		lista: [
		  { val: 'Pasta del Capitano' },
		  { val: 'Acciughe di sorrento' }
		]
	};*/
	
	spesaFactory.elencoProdottiPHP().success (function (data) {
			console.log('query riuscita'+ data.lista[0].NAME);
			$scope.prodottiDaAcquistare = data.lista;
		});


}]);