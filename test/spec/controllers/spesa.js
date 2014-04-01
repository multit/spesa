'use strict';

describe('Controller: SpesaCtrl', function () {

  // load the controller's module
  beforeEach(module('spesaApp'));

  var SpesaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpesaCtrl = $controller('SpesaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
