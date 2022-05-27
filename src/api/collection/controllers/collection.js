'use strict';

/**
 *  collection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::collection.collection', ({ strapi }) => ({

    async find(ctx) {
        // some custom logic here
        ctx.query = { ...ctx.query, local: 'en', populate : 'deep', pagination : {limit : -1}, sort : 'order:ASC' }
        
        // Calling the default core action
        const { data, meta } = await super.find(ctx);

        var returnData = [];
        var size = data.length
        var index;
        for (index = 0; index < size; index++){
            var currentId = data[index].id
            var currentData = data[index].attributes
            var childItems = currentData.items
            var childItemSize = childItems.length
            var childIndex;
            var resultChildItems = [];
            for(childIndex = 0; childIndex < childItemSize; childIndex++){
                var childItem = childItems[childIndex]
                resultChildItems[childIndex] = childItem.cid
            }
            returnData[index] = {
                id : currentId,
                title : currentData.title,
                order : currentData.order,
                items : resultChildItems,
                tag : currentData.tag == null ? "" : currentData.tag
            }
        }
        return returnData;
    }
}));