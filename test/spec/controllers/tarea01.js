'use strict';

describe('Controller: Tarea01Ctrl', function () {

  // load the controller's module
  beforeEach(module('ruthbelindaApp'));

  var Tarea01Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Tarea01Ctrl = $controller('Tarea01Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Tarea01Ctrl.awesomeThings.length).toBe(3);
  });
});
