'use strict';

describe('Controller: AcquistiCtrl', function () {

  // load the controller's module
  beforeEach(module('spesaApp'));

  var AcquistiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcquistiCtrl = $controller('AcquistiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
