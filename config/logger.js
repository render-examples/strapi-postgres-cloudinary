'use strict';

const { winston } = require('@strapi/logger');

module.exports = ({ env }) => {
  return {
    transports: [
      new winston.transports.Console({
        level: env('LOG_LEVEL', 'debug'),
      }),
    ],
  };
};
