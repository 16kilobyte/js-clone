# js-clone

Javascript object copy using deep copy

## Usage

```sh
var deepClone = require('./js-clone/index.js');

var object = {
    name: 'Kator James',
    work: {
        companyName: 'LogicalAddress Ltd',
        getCompanyName: function() {
            // ...
        }
    }
}
var clone = deepClone(object);
```

## Test

```sh
# To run unit tests
node_modules/mocha/bin/_mocha test.js
# To run test with coverage
npm install --save-dev mocha istanbul standard
istanbul cover node_modules/mocha/bin/_mocha test.js --bail
```