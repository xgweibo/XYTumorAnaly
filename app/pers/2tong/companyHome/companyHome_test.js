/* global expect */

'use strict';

describe('myApp.companyHome module', function() {

  beforeEach(module('myApp.companyHome'));

  describe('companyHome controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var companyHomeCtrl = $controller('CompanyHomeCtrl');
      expect(companyHomeCtrl).toBeDefined();
    }));

  });
});