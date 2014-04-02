'use strict';

angular.module('spesaApp')
  .factory('spesaFactory', function ($http) {
    // Service logic

    var doRequest = function (task,method,id) {
      return $http({
        method: method,
        url: 'http://www.andreafiorelli.com/tmp/spesa.php?id='+id+'&&task='+task+'&callback=JSON_CALLBACK'
      });
    };

    // Public API here
    return {
			queryProdotti: function (task,method,id) {
				if (!id) { id = '0'; }
				if (!method) { method = 'JSONP'; }
				if (!task) { task = 'select'; }
				return doRequest(task,method,id);
			}
    };
  });
