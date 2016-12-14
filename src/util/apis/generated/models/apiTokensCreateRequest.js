/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApiTokensCreateRequest class.
 * @constructor
 * @member {string} [description] The description of the token
 * 
 */
function ApiTokensCreateRequest() {
}

/**
 * Defines the metadata of ApiTokensCreateRequest
 *
 * @returns {object} metadata of ApiTokensCreateRequest
 *
 */
ApiTokensCreateRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApiTokensCreateRequest',
    type: {
      name: 'Composite',
      className: 'ApiTokensCreateRequest',
      modelProperties: {
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ApiTokensCreateRequest;