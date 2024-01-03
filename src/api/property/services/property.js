'use strict';

/**
 * property service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::property.property');
