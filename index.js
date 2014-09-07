const rippleRest = require('ripple-rest');

function RippleSimplePlugin(gatewayd) {
  this.gatewayd = gatewayd;
  var router = new express.Router() 
  gatewayd.server.use('/ripple-simple', rippleRest.router);
  gatewayd.processes.add('./node_modules/gatewayd-ripple-simple/processes/outgoing.js');
  gatewayd.processes.add('./node_modules/gatewayd-ripple-simple/processes/incoming.js');
}

module.exports = RippleSimplePlugin;

