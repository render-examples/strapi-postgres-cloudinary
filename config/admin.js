module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
  },
  autoOpen: false,
  serveAdminPanel: env.bool('SERVE_ADMIN_PANEL', true),
});
