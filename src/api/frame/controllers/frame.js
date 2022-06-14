'use strict';

/**
 *  frame controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::frame.frame');
module.exports = createCoreController('api::frame.frame', ({ strapi }) => ({

  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en', populate : 'deep', pagination : {limit : -1} };

    // Calling the default core action
    const { data } = await super.find(ctx);

    const returnData = data.map(( frameRow ) => {
      const { attributes: currentData, id: currentId } = frameRow;
      const defaultType = 'Uri';
      const svgUrl = currentData.svg?.refName?.data?.attributes?.url;
      const imgUrl = currentData.img?.refName?.data?.attributes?.url;
      return {
        id : currentData.cid,
        uid : currentId,
        active : currentData.active,
        unlockType : currentData.unlockType,
        userType : currentData.userType,
        tag : currentData.tag,
        svg : {
          type : (currentData.svg?.type == null) ? defaultType : currentData.svg?.type,
          refName : svgUrl == null ? '' : svgUrl
        },
        img : {
          type : (currentData.img?.type == null) ? defaultType : currentData.img?.type,
          refName : imgUrl == null ? '' : imgUrl
        }
      };
    });
    return returnData;
  }
}));
