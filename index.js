var _ = require('lodash');

var AsyncFunc = require('./lib/AsyncFunc.js');

module.exports = function(target, inNextLoop) {
	var asyncFunc = new AsyncFunc(target, inNextLoop);
	return _.bind(asyncFunc.run, asyncFunc);
};
