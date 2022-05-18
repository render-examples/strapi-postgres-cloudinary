'use strict';

/**
 *  frame controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::frame.frame');
module.exports = createCoreController('api::frame.frame', ({ strapi }) => ({

    async find(ctx) {
        // some custom logic here
        ctx.query = { ...ctx.query, local: 'en', populate : 'deep' }
        
        // Calling the default core action
        const { data, meta } = await super.find(ctx);

        var returnData = [];
        var size = data.length
        var index;
        for (index = 0; index < size; index++){
            var currentData = data[index].attributes
            returnData[index] = {
                id : currentData.cid,
                active : currentData.active,
                unlockType : currentData.unlockType,
                order : currentData.order,
                userType : currentData.userType,
                tag : currentData.tag,
                svg : {
                    type : currentData.svg?.type,
                    refName : currentData.svg?.refName?.data?.attributes?.url
                },
                img : {
                    type : currentData.img?.type,
                    refName : currentData.img?.refName?.data?.attributes?.url
                }
            }
        }
        return returnData;
    }
}));