'use strict';

/**
 * building service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::building.building');
