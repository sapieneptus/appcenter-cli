/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the XcodeArchiveProject class.
 * @constructor
 * @member {string} archiveTargetId The Id of the target to archive
 * 
 * @member {string} projectName The project to archive container name
 * 
 */
function XcodeArchiveProject() {
}

/**
 * Defines the metadata of XcodeArchiveProject
 *
 * @returns {object} metadata of XcodeArchiveProject
 *
 */
XcodeArchiveProject.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'XcodeArchiveProject',
    type: {
      name: 'Composite',
      className: 'XcodeArchiveProject',
      modelProperties: {
        archiveTargetId: {
          required: true,
          serializedName: 'archiveTargetId',
          type: {
            name: 'String'
          }
        },
        projectName: {
          required: true,
          serializedName: 'projectName',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = XcodeArchiveProject;
