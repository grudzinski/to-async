# to-async
Converts a synchronous function to an asynchronous function

##Install
```sh
npm install to-async --save
```

## Use

``toAsync(target, [cbFirst, [inNextFoop]])``
* ``target`` target function
* ``cbFirst`` specifies callback position in arguments, ``true`` first and ``false`` last
* ``inNextFoop`` specifies when to run target function

```js
var toAsync = require('to-async');

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

var asyncFunc = toAsync(syncFunc, false);

asyncFunc(true, cb);
asyncFunc(false, cb);

console.log('After calling to asyncFunc');

// Target function will be runned in next loop using setImmediate

var asyncNextLoopFunc = toAsync(syncFunc, false, true);

asyncNextLoopFunc(true, cb);
asyncNextLoopFunc(false, cb);

console.log('After calling to asyncNextLoopFunc');
```
