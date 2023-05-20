const withImages = require('next-images');

module.exports = withImages();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['puppetinos.s3.ap-southeast-2.amazonaws.com'],
  },
};
