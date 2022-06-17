module.exports = {
  apps: [
    {
      name: 'babystory-strapi',
      script: 'strapi',
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max',
    },
  ],
};
