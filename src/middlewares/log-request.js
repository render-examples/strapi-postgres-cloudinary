module.exports = (config, { strapi })=> {
  return async (context, next) => {
    await next();
    const { request } = context;
    if (!request) {
      return;
    }
    strapi.log.debug(JSON.stringify(request));
  };
};
