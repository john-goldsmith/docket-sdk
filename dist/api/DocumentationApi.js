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
/**
* Documentation service.
* @module api/DocumentationApi
* @version 0.1.0
*/

export default class DocumentationApi {
  /**
  * Constructs a new DocumentationApi. 
  * @alias module:api/DocumentationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Returns an OpenAPI 3.0 spec.
   * Returns an OpenAPI 3.0 spec describing HTTP methods, endpoints, parameters, etc.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  docsGetWithHttpInfo() {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Object;
    return this.apiClient.callApi('/docs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  }
  /**
   * Returns an OpenAPI 3.0 spec.
   * Returns an OpenAPI 3.0 spec describing HTTP methods, endpoints, parameters, etc.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
   */


  docsGet() {
    return this.docsGetWithHttpInfo();
    /*.then(function(response_and_data) {
      return response_and_data.data;
    });*/
  }

}