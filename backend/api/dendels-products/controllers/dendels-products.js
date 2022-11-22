"use strict";

const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async setCorrectPrices(ctx) {
    const products = await strapi.services["dendels-products"].find();

    const dendelsVariants = strapi.services["dendels-variants"];

    if (products instanceof Array) {
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        console.log(product.slug);

        var highPrice = 0;
        var lowPrice = 0;

        switch (product.slug) {
          case "t_blade_trimmer": {
            highPrice = 80.0;
            lowPrice = 39.99;
            break;
          }

          case "sleek_trimmer": {
            highPrice = 65.0;
            lowPrice = 39.99;
            break;
          }

          case "stainless_steel_nasal": {
            highPrice = 25.0;
            lowPrice = 9.99;
            break;
          }

          case "rechargable_nose_trimmer": {
            highPrice = 50.0;
            lowPrice = 19.99;
            break;
          }

          case "wet_dry_ceramic_straightener": {
            highPrice = 120.0;
            lowPrice = 49.99;
            break;
          }

          case "ceramic_curling_iron": {
            highPrice = 95.0;
            lowPrice = 49.99;
            break;
          }

          case "five_barrel_curling_iron": {
            highPrice = 120.0;
            lowPrice = 79.99;
            break;
          }

          case "three_barrel_hair_curler": {
            highPrice = 135.0;
            lowPrice = 69.99;
            break;
          }

          case "tourmaline_hair_dryer": {
            highPrice = 110.0;
            lowPrice = 49.99;
            break;
          }

          case "hot_rotating_roller": {
            highPrice = 100.0;
            lowPrice = 69.99;
            break;
          }

          case "strong_wind_hammer_blower": {
            highPrice = 90.0;
            lowPrice = 49.99;
            break;
          }

          case "photo_epilator_five_gear": {
            highPrice = 150.0;
            lowPrice = 89.99;
            break;
          }

          case "portable_instant": {
            highPrice = 75.0;
            lowPrice = 49.99;
            break;
          }

          case "pulsing_perma_hair_remover": {
            highPrice = 90.0;
            lowPrice = 59.99;
            break;
          }

          default:
            break;
        }

        if (product.dendels_variants instanceof Array) {
          for (var j = 0; j < product.dendels_variants.length; j++) {
            var variant = product.dendels_variants[j];
            // variant.highPrice = highPrice;
            // variant.lowPrice = lowPrice;
            // variant.sale = true;

            await dendelsVariants.update(
              { id: variant.id },
              {
                ...variant,
                highPrice,
                lowPrice,
                sale: true,
              }
            );
          }
        }
      }
    }

    return {
      message: "Success",
    };
  },

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

              if (highestPrice < variant.highPrice) {
                highestPrice = variant.highPrice;
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
