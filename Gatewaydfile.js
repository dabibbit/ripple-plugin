const RippleSimplePlugin = require('gatewayd-ripple-simple');

module.exports = function(gatewayd) {

  var plugin = new RippleSimplePlugin({ gatewayd: gatewayd });

  plugin.processes.forEach(function(processPath) {
    gatewayd.processes.add(processPath);
  });

  gatewayd.server.use('/ripple-simple', plugin.router);
}

