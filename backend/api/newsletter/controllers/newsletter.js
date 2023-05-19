"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async add(ctx) {
    const { email } = ctx.request.body;

    const newsletter = strapi.services["newsletter"];
    var result = await newsletter.create({ email });

    result = sanitizeEntity(result, { model: strapi.models["newsletter"] });

    return {
      message: "success",
    };
  },
};
