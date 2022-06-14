const cache = require('koa-cache-lite');
const _ = require('lodash');


const defaultRouteConfig = {
  timeout: 600000, // 10 min
  cacheKeyArgs: {
    query: true,
  },
};

module.exports = (config) => {
  const options = _.pickBy(config?.options || {}, _.identity);
  const routeOptions = _.pickBy(config?.routeOptions || {}, _.identity);

  cache.configure({
    '*': {
      ...defaultRouteConfig,
      ...routeOptions,
    },
  }, {
    debug: false,
    ...options,
  });
  return cache.middleware();
};
