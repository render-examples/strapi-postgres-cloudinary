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
});

