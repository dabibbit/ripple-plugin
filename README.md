# Gatewayd Ripple Plugin

Automatically send and receive payments on the Ripple network
using gatewayd.

## Installation

Include the plugin in your gatewayd application using NPM:

    npm install --save gatewayd-ripple-plugin

## Usage

### Example Gatewaydfile.js

    const RippleSimplePlugin = require('gatewayd-ripple-simple');

    module.exports = function(gatewayd) {
      var plugin = new RippleSimplePlugin({ gatewayd: gatewayd });
      plugin.processes.forEach(function(processPath) {
        gatewayd.processes.add(processPath);
      });
      gatewayd.server.use('/ripple-simple', plugin.router);
    }

### Processes

  The file in `outgoing.js` runs a daemon process that monitors the Transactions table for
outgoing ripple transactions, and sends them to the Ripple network.

    gatewayd.processes.add('./node_modules/gatewayd-ripple-plugin/processes/outgoing.js');

  The file in `incoming.js` runs a daemon process that monitors the Ripple network for
Transactions made to a ripple Address, and records them in the gatewayd database.

    gatewayd.processes.add('./node_modules/gatewayd-ripple-plugin/processes/outgoing.js');

### Routes

  The http /json api routes from the Ripple-REST spec are attached to the gatewayd's http
express.js server.

    gatewayd.server.use('/ripple-simple', plugin.router);

