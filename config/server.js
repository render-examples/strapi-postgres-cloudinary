module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  // emitErrors: true,
  app: {
    keys: env.array('APP_KEYS',['myKeyA', 'myKeyB']),
  },
  admin: {
    url: '/dashboard',
    secret: env('ADMIN_JWT_SECRET')
  },
});
