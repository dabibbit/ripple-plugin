var SqlMqWorker = require('sql-mq-worker');
var OutgoingPaymentProcessor = require(__dirname+'/../lib/outgoing_payment_processor.js');
var gatewayd = require(process.env.GATEWAYD_PATH);

var worker = new SqlMqWorker({
  Class: gatewayd.data.models.rippleTransactions,
  predicate: { where: {
    state: 'outgoing'
  }},
  job: function(outgoingPayment, callback) {
    var outgoingPaymentProcessor = new OutgoingPaymentProcessor(outgoingPayment);
    outgoingPaymentProcessor.processOutgoingPayment(callback);
  }
});

worker.start();

process.on('uncaughtException', function(error) {
  logger.error('exception', error);
  logger.error('exception:stack', error.stack);
  process.exit();
});

