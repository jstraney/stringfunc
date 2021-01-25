const stringfunc = require('../index.js');

const obj = {
  nested: {
    nestedAgain: {
      doc: stringfunc(function printXTimes(x, y) {
        for (let i = 0; i < x; i++) {
          console.log(y);
        }
      }),
      compare: (function printXTimes(x, y) {
        for (let i = 0; i < x; i++) {
          console.log(y);
        }
      }).toString(),
    }
  }
}

console.log(obj.nested.nestedAgain.doc);
console.log(obj.nested.nestedAgain.compare);

const closured = function (a, b, cb) {

  function inner (d, e) {
    d(e);
  }

  // I do not know what this does.
  if (a && b) {
    cb(inner(cb, a + b));
  }

}

console.log(stringfunc(closured));
