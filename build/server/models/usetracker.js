// Generated by CoffeeScript 1.10.0
var UseTracker, cozydb;

cozydb = require('cozydb');

module.exports = UseTracker = cozydb.getModel('UseTracker', {
  app: String,
  dateStart: Date,
  dateEnd: Date,
  duration: Number
});
