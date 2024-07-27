console.log(2 + 2);
const a = 12,
  b = 2;
console.log(a + b);
///fixed values =  literals
// varibles
//Hyphens are not allowed in JavaScript. They are reserved for subtractions.

let greet = 'jii'
console.log(`this is ${greet}`)

let sym =  Symbol('newone')
console.log(typeof sym);

console.log(typeof 42);           // "number"
console.log(typeof 'Hello');      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (this is a quirk in JavaScript)
console.log(typeof Symbol());     // "symbol"
console.log(typeof 123n);         // "bigint"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"


let str = "123";
let num = Number(str);  // Converts to number 123


