var blacklist = require('react-native/packager/blacklist');

var config = {
  getBlacklistRE(platform) {
    return blacklist(platform, [
      /node_modules\/react-native-web\/.*/,
      /node_modules\/react\/.*/
    ]);
  }
};

module.exports = config;
