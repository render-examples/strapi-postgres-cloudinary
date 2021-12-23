module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ea9a418022c8044305a8ab471025ee7b'),
  },
});
