module.exports = ({ env }) => {
  return [
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ['\'self\'', 'https:'],
            'img-src': ['\'self\'', 'data:', 'blob:', 'res.cloudinary.com'],
            'media-src': ['\'self\'', 'data:', 'blob:', 'res.cloudinary.com'],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'global::log-request',
    {
      name: 'global::http-cache-redis',
      config: {
        options: {
          debug: env('LOG_LEVEL') === 'debug'
        },
      },
    },
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
