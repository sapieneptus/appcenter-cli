/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ItunesTeamsRequest class.
 * @constructor
 * Apple credentials needed to log into the Apple Itunes Portal
 *
 * @member {string} username The username for the Apple Developer account.
 * 
 * @member {string} password The password for the Apple Developer account.
 * 
 */
function ItunesTeamsRequest() {
}

/**
 * Defines the metadata of ItunesTeamsRequest
 *
 * @returns {object} metadata of ItunesTeamsRequest
 *
 */
ItunesTeamsRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ItunesTeamsRequest',
    type: {
      name: 'Composite',
      className: 'ItunesTeamsRequest',
      modelProperties: {
        username: {
          required: true,
          serializedName: 'username',
          type: {
            name: 'String'
          }
        },
        password: {
          required: true,
          serializedName: 'password',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ItunesTeamsRequest;
