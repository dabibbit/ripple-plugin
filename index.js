//const rippleRest = require('ripple-rest');
const express = require('express');

function RippleSimplePlugin(options) {
  var options = options || {};
  this.gatewayd = options.gatewayd;
  this.router = new express.Router();
  this.processes = [
    __dirname+'/processes/outgoing.js',
    __dirname+'/processes/incoming.js'
  ];
}

module.exports = RippleSimplePlugin;

