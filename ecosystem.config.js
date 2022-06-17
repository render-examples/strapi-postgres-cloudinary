module.exports = {
  apps: [
    {
      name: 'babystory-strapi',
      script: 'strapi',
      args: 'start',
      exec_mode: 'cluster',
      instances: '2',
      out_file: '/dev/null',
      error_file: '/dev/null',
      source_map_support: true,
      instance_var: 'NODE_APP_INSTANCE',
    },
  ],
};
