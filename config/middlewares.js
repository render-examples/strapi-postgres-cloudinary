module.exports = ({ env }) => {
  return [
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'global::log-request',
    {
      name: 'global::http-cache-redis',
      config: {
        debug: env('LOG_LEVEL') === 'debug',
      },
    },
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
