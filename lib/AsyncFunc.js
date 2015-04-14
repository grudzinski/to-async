var _ = require('lodash');
var debug = require('debug');

function AsyncFunc(target, inNextLoop) {
	this._debug = debug('AsyncFunc');
	if (!_.isFunction(target)) {
		throw new TypeError('Target is not a function');
	}
	this._target = target;
	this._inNextLoop = inNextLoop;
}

var p = AsyncFunc.prototype;

p.run = function() {
	this._debug('run');
	var args = _.toArray(arguments);
	var cb = args.pop();
	if (this._inNextLoop) {
		this._runInNextLoop(args, cb);
		return;
	}
	this._runImmediately(args, cb);
};

p._runInNextLoop = function(args, cb) {
	this._debug('_runInNextLoop');
	var run = _.bind(this._runImmediately, this, args, cb);
	setImmediate(run);
};

p._runImmediately = function(args, cb) {
	this._debug('_runImmediately');
	try {
		this._target.apply(null, args);
	} catch (e) {
		cb(e);
		return;
	}
	cb(null);
};

module.exports = AsyncFunc;
