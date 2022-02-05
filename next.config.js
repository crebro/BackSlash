const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'https://backslash-backend.herokuapp.com/']
  }
}
