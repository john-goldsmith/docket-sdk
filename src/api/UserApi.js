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
import Error from '../model/Error';
import User from '../model/User';
import UsersPostRequestBody from '../model/UsersPostRequestBody';

/**
* User service.
* @module api/UserApi
* @version 0.1.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a user
     * 
     * @param {module:model/UsersPostRequestBody} usersPostRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    usersPostWithHttpInfo(usersPostRequestBody) {
      let postBody = usersPostRequestBody;

      // verify the required parameter 'usersPostRequestBody' is set
      if (usersPostRequestBody === undefined || usersPostRequestBody === null) {
        throw new Error("Missing the required parameter 'usersPostRequestBody' when calling usersPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a user
     * 
     * @param {module:model/UsersPostRequestBody} usersPostRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    usersPost(usersPostRequestBody) {
      return this.usersPostWithHttpInfo(usersPostRequestBody);
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


}
