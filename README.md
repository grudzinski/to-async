# to-async
A Node.js util to converts a synchronous function to an asynchronous function

##Install
```sh
npm install to-async --save
```

## Use
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

var asyncFunc = toAsync(syncFunc);

asyncFunc(true, cb);
asyncFunc(false, cb);

console.log('After calling to asyncFunc');

// 

var asyncImmediatedFunc = toAsync(syncFunc, true);

asyncImmediatedFunc(true, cb);
asyncImmediatedFunc(false, cb);

console.log('After calling to asyncImmediatedFunc');

```
