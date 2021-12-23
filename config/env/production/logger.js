"use strict";

const { winston } = require("@strapi/logger");

module.exports = {
  transports: [
    new winston.transports.Console({
      level: "error",
    }),
  ],
};
