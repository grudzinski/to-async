var _ = require('lodash');

var AsyncFunc = require('./lib/AsyncFunc.js');

function toAsync(target, cbFirst, inNextLoop) {
	var asyncFunc = new AsyncFunc(target, cbFirst, inNextLoop);
	return _.bind(asyncFunc.run, asyncFunc);
}

toAsync.FIRST = true;
toAsync.LAST = false;

module.exports = toAsync;
