var toAsync = require('./index.js');

function syncFunc(toThrow) {
  if (toThrow) {
    throw new Error('Uppps')
  }
}

function cb(err) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log('Success');
}

// Target function will be runned immediately

var asyncFunc = toAsync(syncFunc);

asyncFunc(true, cb);
asyncFunc(false, cb);

console.log('After calling to asyncFunc');

// Target function will be runned in next loop using setImmediate

var asyncNextLoopFunc = toAsync(syncFunc, true);

asyncNextLoopFunc(true, cb);
asyncNextLoopFunc(false, cb);

console.log('After calling to asyncNextLoopFunc');
