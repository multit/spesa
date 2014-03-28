'use strict';

angular.module('spesaApp')
  .filter('CustomDateFilter', function ($filter) {
    return function (input) {
      var dataArrvata = new Date(input);
      return $filter('date')(dataArrvata, 'fullDate');
    };
  });
