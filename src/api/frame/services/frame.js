'use strict';

/**
 * frame service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frame.frame');
