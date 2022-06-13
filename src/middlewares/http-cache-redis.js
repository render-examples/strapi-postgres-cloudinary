const cache = require('koa-cache-lite');

cache.configure({
  '/api/frames': 30000,
}, {
  debug: true,
});

module.exports = (config) => {
  return cache.middleware();
}
