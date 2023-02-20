"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const JSZip = require("jszip");
const https = require("https");
const Stream = require("stream").Transform;

async function httpPromise(mediaURL) {
  return new Promise(function (resolve, reject) {
    https
      .request(mediaURL, function (response) {
        var data = new Stream();

        response.on("error", () => reject("Error"));

        response.on("data", function (chunk) {
          data.push(chunk);
        });

        response.on("end", function () {
          resolve(data.read());
        });
      })
      .end();
  });
}

module.exports = {
  async getzip(ctx) {
    const zip = new JSZip();

    zip.file("Hello.txt", "Hello World\n");
    const assets = strapi.services["warkawikassets"];

    const asset = await assets.findOne({
      slug: "example",
    });

    for (var i = 0; i < asset.media.length; i++) {
      const mediaURL = asset.media[i].url;
      const fileName = mediaURL.slice(
        String("https://puppetinos.s3.us-west-1.amazonaws.com/").length
      );

      const request = await httpPromise(mediaURL);
      const image = Buffer.from(request);

      zip.file(fileName, image, {
        binary: true,
      });
    }

    // console.log(asset);

    const compressed = await zip.generateAsync({ type: "blob" });

    return ctx.send(Buffer.from(await compressed.arrayBuffer()));
  },
};
