const strapi = require('strapi');

strapi(/* {...} */).start().then(() => {
  const params = {
    _where: { email: 'info@spidernet.co.il' }, // replace with your email
  };
  const user = {
    password: 'newpassword', // replace with your new password
  };

  strapi.query('user', 'admin').update(params, user).then(() => {
    console.log('Password updated successfully');
    strapi.stop();
  });
});