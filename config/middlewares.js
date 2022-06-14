module.exports = ({ env }) => {
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
          debug: env('LOG_LEVEL') === 'debug'
        },
      },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
