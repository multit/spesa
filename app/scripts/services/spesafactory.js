'use strict';

angular.module('spesaApp')
  .factory('spesaFactory', function ($http) {
    // Service logic

    var doRequest = function (id,task) {
      return $http({
        method: 'JSONP',
        url: 'http://127.0.0.1/spesa.php?id='+id+'&&task='+task+'&callback=JSON_CALLBACK'
      });
    };

    // Public API here
    return {
			elencoProdottiPHP: function (id,task) {
				if (!id) { id = '0'; }
				if (!task) { task = 'select'; }
				return doRequest(id,task);
			}
    };
  });
