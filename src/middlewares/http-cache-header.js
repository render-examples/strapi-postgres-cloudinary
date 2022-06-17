const defaultCacheControlPolicy = 'public, max-age=600';

module.exports = (config, { strapi }) => {
  return async (context, next) => {
    await next();

    const { response } = context;
    const httpMethod = context.request?.method;

    if (!httpMethod || httpMethod !== 'GET') {
      return;
    }

    if (!response) {
      return;
    }

    response.set({
      'Cache-Control': defaultCacheControlPolicy,
    });

    return;
  };
};
