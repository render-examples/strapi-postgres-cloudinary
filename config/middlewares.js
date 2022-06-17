const { URL } = require('url');

module.exports = ({ env }) => {
  const REDIS_URL = env('REDIS_URL');

  const cacheExternalOptions = (() => {
    if (!REDIS_URL) {
      return null;
    }
    const { protocol, hostname, port } = new URL(REDIS_URL);

    if (!protocol || protocol !== 'redis:') {
      return null;
    }

    const type = protocol.replace(':', '');

    return {
      type,
      host: hostname,
      port,
    };
  })();



  return [
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'global::log-request',
    'strapi::query',
    'strapi::body',
    {
      name: 'global::http-cache-redis',
      config: {
        options: {
          debug: env('LOG_LEVEL') === 'debug',
          external: cacheExternalOptions
        },
      },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
