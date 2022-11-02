"use strict";

const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async updateprices(ctx) {
    try {
      //get every product
      const products = await strapi.services["dendels-products"].find();

      if (products instanceof Array) {
        for (var i = 0; i < products.length; i++) {
          var product = products[i];
          //create a variable for highestPrice
          var highestPrice = 0;
          //for every variant
          if (product.dendels_variants instanceof Array) {
            for (var j = 0; j < product.dendels_variants.length; j++) {
              var variant = product.dendels_variants[j];

              if (highestPrice < variant.highPrice) {
                highestPrice = variant.highPrice;
              }
            }
          }
          //if variant highPrice is lower than the highestPrice replace it
          //make the product highestPrice as highestPrice
          console.log(highestPrice);
          product.highestPrice = highestPrice;

          product = sanitizeEntity(product, {
            model: strapi.models["dendels-products"],
          });

          const dendelsProducts = strapi.services["dendels-products"];

          await dendelsProducts.update(
            { id: product.id },
            { ...product, highestprice: highestPrice }
          );
        }
      }

      //save and sanitize

      return {
        message: "Success",
      };
    } catch (e) {
      console.log(e);

      return {
        message: "fail",
      };
    }
  },
};
