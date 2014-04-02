'use strict';

describe('Service: spesaFactory', function () {

  // load the service's module
  beforeEach(module('spesaApp'));

  // instantiate service
  var spesaFactory;
  beforeEach(inject(function (_spesaFactory_) {
    spesaFactory = _spesaFactory_;
  }));

  it('should do something', function () {
    expect(!!spesaFactory).toBe(true);
  });

});
