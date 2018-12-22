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


import ApiClient from "../ApiClient";
import MeEventPutRequestBody from '../model/MeEventPutRequestBody';
import MeEventsPostRequestBody from '../model/MeEventsPostRequestBody';
import MePutRequestBody from '../model/MePutRequestBody';
import XComponentsresponsesMeDeleteNotFound from '../model/XComponentsresponsesMeDeleteNotFound';
import XComponentsresponsesMeEventDeleteNotFound from '../model/XComponentsresponsesMeEventDeleteNotFound';
import XComponentsresponsesMeEventPutNotFound from '../model/XComponentsresponsesMeEventPutNotFound';
import XComponentsresponsesMeEventPutOk from '../model/XComponentsresponsesMeEventPutOk';
import XComponentsresponsesMeEventsGetNotFound from '../model/XComponentsresponsesMeEventsGetNotFound';
import XComponentsresponsesMeEventsGetOk from '../model/XComponentsresponsesMeEventsGetOk';
import XComponentsresponsesMeEventsPostNotFound from '../model/XComponentsresponsesMeEventsPostNotFound';
import XComponentsresponsesMeEventsPostOk from '../model/XComponentsresponsesMeEventsPostOk';
import XComponentsresponsesMeGetNotFound from '../model/XComponentsresponsesMeGetNotFound';
import XComponentsresponsesMeGetOk from '../model/XComponentsresponsesMeGetOk';
import XComponentsresponsesMePutBadRequest from '../model/XComponentsresponsesMePutBadRequest';
import XComponentsresponsesMePutNotFound from '../model/XComponentsresponsesMePutNotFound';
import XComponentsresponsesMePutOk from '../model/XComponentsresponsesMePutOk';

/**
* Me service.
* @module api/MeApi
* @version 0.1.0
*/
export default class MeApi {

    /**
    * Constructs a new MeApi. 
    * @alias module:api/MeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deletes the current user
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    meDeleteWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/me', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes the current user
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    meDelete() {
      return this.meDeleteWithHttpInfo();
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


    /**
     * Fetches all events for the current user
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/XComponentsresponsesMeEventsGetOk} and HTTP response
     */
    meEventsGetWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = XComponentsresponsesMeEventsGetOk;

      return this.apiClient.callApi(
        '/me/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetches all events for the current user
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/XComponentsresponsesMeEventsGetOk}
     */
    meEventsGet() {
      return this.meEventsGetWithHttpInfo();
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


    /**
     * Deletes an event for the current user
     * 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    meEventsIdDeleteWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling meEventsIdDelete");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/me/events/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes an event for the current user
     * 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    meEventsIdDelete(id) {
      return this.meEventsIdDeleteWithHttpInfo(id);
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


    /**
     * Updates an event for the current user
     * 
     * @param {String} id 
     * @param {module:model/MeEventPutRequestBody} meEventPutRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/XComponentsresponsesMeEventPutOk} and HTTP response
     */
    meEventsIdPutWithHttpInfo(id, meEventPutRequestBody) {
      let postBody = meEventPutRequestBody;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling meEventsIdPut");
      }

      // verify the required parameter 'meEventPutRequestBody' is set
      if (meEventPutRequestBody === undefined || meEventPutRequestBody === null) {
        throw new Error("Missing the required parameter 'meEventPutRequestBody' when calling meEventsIdPut");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = XComponentsresponsesMeEventPutOk;

      return this.apiClient.callApi(
        '/me/events/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates an event for the current user
     * 
     * @param {String} id 
     * @param {module:model/MeEventPutRequestBody} meEventPutRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/XComponentsresponsesMeEventPutOk}
     */
    meEventsIdPut(id, meEventPutRequestBody) {
      return this.meEventsIdPutWithHttpInfo(id, meEventPutRequestBody);
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


    /**
     * Creates a new event for the current user
     * 
     * @param {module:model/MeEventsPostRequestBody} meEventsPostRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/XComponentsresponsesMeEventsPostOk} and HTTP response
     */
    meEventsPostWithHttpInfo(meEventsPostRequestBody) {
      let postBody = meEventsPostRequestBody;

      // verify the required parameter 'meEventsPostRequestBody' is set
      if (meEventsPostRequestBody === undefined || meEventsPostRequestBody === null) {
        throw new Error("Missing the required parameter 'meEventsPostRequestBody' when calling meEventsPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = XComponentsresponsesMeEventsPostOk;

      return this.apiClient.callApi(
        '/me/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a new event for the current user
     * 
     * @param {module:model/MeEventsPostRequestBody} meEventsPostRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/XComponentsresponsesMeEventsPostOk}
     */
    meEventsPost(meEventsPostRequestBody) {
      return this.meEventsPostWithHttpInfo(meEventsPostRequestBody);
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


    /**
     * Fetches the current user
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/XComponentsresponsesMeGetOk} and HTTP response
     */
    meGetWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = XComponentsresponsesMeGetOk;

      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetches the current user
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/XComponentsresponsesMeGetOk}
     */
    meGet() {
      return this.meGetWithHttpInfo();
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


    /**
     * Updates the current user
     * 
     * @param {module:model/MePutRequestBody} mePutRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/XComponentsresponsesMePutOk} and HTTP response
     */
    mePutWithHttpInfo(mePutRequestBody) {
      let postBody = mePutRequestBody;

      // verify the required parameter 'mePutRequestBody' is set
      if (mePutRequestBody === undefined || mePutRequestBody === null) {
        throw new Error("Missing the required parameter 'mePutRequestBody' when calling mePut");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = XComponentsresponsesMePutOk;

      return this.apiClient.callApi(
        '/me', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the current user
     * 
     * @param {module:model/MePutRequestBody} mePutRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/XComponentsresponsesMePutOk}
     */
    mePut(mePutRequestBody) {
      return this.mePutWithHttpInfo(mePutRequestBody);
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


}
