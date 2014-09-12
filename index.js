const RippleRestPlugin = require('ripple-rest');
const express = require('express');

function RippleSimplePlugin(options) {
  var rippleRest = new RippleRestPlugin(options);
  var options = options || {};
  this.gatewayd = options.gatewayd;
  this.router = rippleRest.router;
  this.processes = [
    __dirname+'/processes/ripple-outgoing.js',
    __dirname+'/processes/ripple-incoming.js'
  ];
}

module.exports = RippleSimplePlugin;

