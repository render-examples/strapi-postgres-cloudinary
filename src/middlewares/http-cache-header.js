const defaultCacheControlPolicy = 'public, max-age=600';

module.exports = (config, { strapi }) => {
  return async (context, next) => {
    await next();

    const { response } = context;
    if (!response) {
      return;
    }

    response.set({
      'Cache-Control': defaultCacheControlPolicy,
    });

    return;
  };
};
