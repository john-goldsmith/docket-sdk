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


import ApiClient from '../ApiClient';





/**
* The MePutRequestBody model module.
* @module model/MePutRequestBody
* @version 0.1.0
*/
export default class MePutRequestBody {
    /**
    * Constructs a new <code>MePutRequestBody</code>.
    * @alias module:model/MePutRequestBody
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>MePutRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MePutRequestBody} obj Optional instance to populate.
    * @return {module:model/MePutRequestBody} The populated <code>MePutRequestBody</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MePutRequestBody();

            
            
            

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    *
    email = undefined;
    */
    /**
    * @member {String} firstName
    *
    firstName = undefined;
    */
    /**
    * @member {String} lastName
    *
    lastName = undefined;
    */
    /**
    * @member {String} password
    *
    password = undefined;
    */





    /**
    * @return {String}
    */
    getEmail() {
        return this.email;
    }

    /**
    * @param {String} email
    */
    setEmail(email) {
        this['email'] = email;
    }

    /**
    * @return {String}
    */
    getFirstName() {
        return this.firstName;
    }

    /**
    * @param {String} firstName
    */
    setFirstName(firstName) {
        this['firstName'] = firstName;
    }

    /**
    * @return {String}
    */
    getLastName() {
        return this.lastName;
    }

    /**
    * @param {String} lastName
    */
    setLastName(lastName) {
        this['lastName'] = lastName;
    }

    /**
    * @return {String}
    */
    getPassword() {
        return this.password;
    }

    /**
    * @param {String} password
    */
    setPassword(password) {
        this['password'] = password;
    }




}


