'use strict';

angular.module('spesaApp')
  .factory('killerfactory', function ($http) {
    // Service logic
    // ...
    var doRequest = function () {
      return $http({
        method: 'JSONP',
        url: 'http://www.monokings.com/api/get_posts?callback=JSON_CALLBACK'
      });
    };

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      listaGigs: function () {
        return doRequest();
      }
    };
  });