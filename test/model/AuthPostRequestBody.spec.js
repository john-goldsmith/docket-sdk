/**
 * Docket API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@DocketDocketSdk);
  }
}(this, function(expect, @DocketDocketSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @DocketDocketSdk.AuthPostRequestBody();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AuthPostRequestBody', function() {
    it('should create an instance of AuthPostRequestBody', function() {
      // uncomment below and update the code to test AuthPostRequestBody
      //var instane = new @DocketDocketSdk.AuthPostRequestBody();
      //expect(instance).to.be.a(@DocketDocketSdk.AuthPostRequestBody);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new @DocketDocketSdk.AuthPostRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new @DocketDocketSdk.AuthPostRequestBody();
      //expect(instance).to.be();
    });

  });

}));
