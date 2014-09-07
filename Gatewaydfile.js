const RippleSimplePlugin = require('gatewayd-ripple-simple');

module.exports = function(gatewayd) {
  var plugin = new RippleSimplePlugin({ gatewayd: gatewayd });

  plugin.processes.forEach(gatewayd.processes.add);
  gatewayd.server.use('/ripple-simple', plugin.router);
}

