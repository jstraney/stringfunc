# Stringify Functions

I cannot recommend enough, do not use this to serialize code to be re-used. This will not preserve closures and other important aspects of JS runtime. This is useful for maybe automatically documenting a function or just pretty printing the function. The purpose was preserve function spacing and indentation at the time of stringification.

## Usage

```js
const stringfunc = require('@jstraney/stringfunc');

const func = (a, b) => {
  a + b;
};

stringfunc(func);
```

It also works when the function is indented (usually will add spacing. the library left aligns the string function).

```js
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
// will print left aligned.
console.log(obj.nested.nestedAgain.doc);
// compare to simple toString call
console.log(obj.nested.nestedAgain.compare);
```
