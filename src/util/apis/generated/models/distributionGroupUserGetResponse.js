/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DistributionGroupUserGetResponse class.
 * @constructor
 * @member {string} [id] The unique id (UUID) of the user
 * 
 * @member {string} [avatarUrl] The avatar URL of the user
 * 
 * @member {boolean} [canChangePassword] User is required to send an old
 * password in order to change the password.
 * 
 * @member {string} [displayName] The full name of the user. Might for example
 * be first and last name
 * 
 * @member {string} email The email address of the user
 * 
 * @member {boolean} [invitePending] Whether the has accepted the invite.
 * Available when an invite is pending, and the value will be "true".
 * 
 * @member {string} [name] The unique name that is used to identify the user.
 * 
 */
function DistributionGroupUserGetResponse() {
}

/**
 * Defines the metadata of DistributionGroupUserGetResponse
 *
 * @returns {object} metadata of DistributionGroupUserGetResponse
 *
 */
DistributionGroupUserGetResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DistributionGroupUserGetResponse',
    type: {
      name: 'Composite',
      className: 'DistributionGroupUserGetResponse',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        avatarUrl: {
          required: false,
          serializedName: 'avatar_url',
          type: {
            name: 'String'
          }
        },
        canChangePassword: {
          required: false,
          serializedName: 'can_change_password',
          type: {
            name: 'Boolean'
          }
        },
        displayName: {
          required: false,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        email: {
          required: true,
          serializedName: 'email',
          type: {
            name: 'String'
          }
        },
        invitePending: {
          required: false,
          serializedName: 'invite_pending',
          type: {
            name: 'Boolean'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DistributionGroupUserGetResponse;
