module.exports = ({ env }) => ({
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
  'generate-data': {
        enabled: true,
    },
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
        apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
        appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
        teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
        roles: ["strapi-super-admin"],
      },
    }
});