const cache = require('koa-cache-lite');

module.exports = (config, strapi) => {
  const { cacheTTL } = config;
  cache.configure({
    '/api/frames': cacheTTL,
  }, {
    debug: true,
  });
  return cache.middleware();
}
