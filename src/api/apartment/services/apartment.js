'use strict';

/**
 * apartment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::apartment.apartment');
