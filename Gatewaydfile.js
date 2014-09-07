const RippleSimplePlugin = require('gatewayd-ripple-simple');

module.exports = function(gatewayd) {
  new RippleSimplePlugin(gatewayd);
}

