
exports.local = {
  host: '2443b31e.ngrok.io',
  port: 80
};

exports.sauce = {
  host: 'ondemand.saucelabs.com',
  port: 80,
  auth: process.env.npm_package_config_username + ":" + process.env.npm_package_config_key
};
