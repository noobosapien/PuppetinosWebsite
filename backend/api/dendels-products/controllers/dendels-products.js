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
          var onSale = false;
          //for every variant
          if (product.dendels_variants instanceof Array) {
            for (var j = 0; j < product.dendels_variants.length; j++) {
              var variant = product.dendels_variants[j];

              if (highestPrice < variant.lowPrice) {
                highestPrice = variant.lowPrice;
              }

              if (variant.sale) {
                onSale = true;
              }
            }
          }
          //if variant highPrice is lower than the highestPrice replace it
          //make the product highestPrice as highestPrice
          product.highestPrice = highestPrice;

          product = sanitizeEntity(product, {
            model: strapi.models["dendels-products"],
          });

          const dendelsProducts = strapi.services["dendels-products"];

          await dendelsProducts.update(
            { id: product.id },
            { ...product, highestprice: highestPrice, onSale }
          );
        }

        //if types doesn't have the type in it add the product.type
      }

      // console.log(products);

      // console.log(types);
      const dendelsCategories = await strapi.services[
        "dendels-categories"
      ].find();
      // console.log(dendelsCategories);

      // find products in each category
      if (dendelsCategories instanceof Array) {
        for (var i = 0; i < dendelsCategories.length; i++) {
          var category = dendelsCategories[i];
          var types = [];

          const products = await strapi.services["dendels-products"].find({
            dendels_category: category.id,
          });

          products instanceof Array &&
            products.forEach((pr) => {
              const check = types.filter((ty) => ty === pr.type);
              if (check.length === 0) {
                types.push(pr.type);
              }
            });

          const typesJSON = JSON.stringify(types);

          const dendelsCats = strapi.services["dendels-categories"];

          await dendelsCats.update(
            { id: category.id },
            { ...category, types: typesJSON }
          );
        }
      }

      // for each product in the category get the type and add it to the array

      // JSONify the array and set it to category.types

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
