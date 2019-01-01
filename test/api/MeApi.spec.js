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
    instance = new @DocketDocketSdk.MeApi();
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

  describe('MeApi', function() {
    describe('createMyEvent', function() {
      it('should call createMyEvent successfully', function(done) {
        //uncomment below and update the code to test createMyEvent
        //instance.createMyEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMe', function() {
      it('should call deleteMe successfully', function(done) {
        //uncomment below and update the code to test deleteMe
        //instance.deleteMe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMyEventById', function() {
      it('should call deleteMyEventById successfully', function(done) {
        //uncomment below and update the code to test deleteMyEventById
        //instance.deleteMyEventById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMe', function() {
      it('should call getMe successfully', function(done) {
        //uncomment below and update the code to test getMe
        //instance.getMe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyEventById', function() {
      it('should call getMyEventById successfully', function(done) {
        //uncomment below and update the code to test getMyEventById
        //instance.getMyEventById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyEvents', function() {
      it('should call getMyEvents successfully', function(done) {
        //uncomment below and update the code to test getMyEvents
        //instance.getMyEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMe', function() {
      it('should call updateMe successfully', function(done) {
        //uncomment below and update the code to test updateMe
        //instance.updateMe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMyEventById', function() {
      it('should call updateMyEventById successfully', function(done) {
        //uncomment below and update the code to test updateMyEventById
        //instance.updateMyEventById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
