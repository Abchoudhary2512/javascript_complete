//operators
// Arithmetic Operators
let a = 10;
let b = 3;
// console.log("Arithmetic Operators:");
// console.log("a + b =", a + b);  // Addition
// console.log("a - b =", a - b);  // Subtraction
// console.log("a * b =", a * b);  // Multiplication
// console.log("a / b =", a / b);  // Division
// console.log("a % b =", a % b);  // Modulus
// console.log("a ** b =", a ** b);  // Exponentiation

// // // Assignment Operators
// let x = 5;
// console.log("\nAssignment Operators:");
// x += 2;  // Equivalent to x = x + 2
// console.log("x += 2 ->", x);
// x -= 1;  // Equivalent to x = x - 1
// console.log("x -= 1 ->", x);
// x *= 3;  // Equivalent to x = x * 3
// console.log("x *= 3 ->", x);
// x /= 2;  // Equivalent to x = x / 2
// console.log("x /= 2 ->", x);
// x %= 3;  // Equivalent to x = x % 3
// console.log("x %= 3 ->", x);
// x **= 2;  // Equivalent to x = x ** 2
// console.log("x **= 2 ->", x);

// // Comparison Operators
console.log("\nComparison Operators:");
console.log("a == b ->", a == b);  // Loose equality
console.log("a === b ->", a === b);  // Strict equality
console.log("a != b ->", a != b);  // Loose inequality
console.log("a !== b ->", a !== b);  // Strict inequality
console.log("a > b ->", a > b);  // Greater than
console.log("a < b ->", a < b);  // Less than
console.log("a >= b ->", a >= b);  // Greater than or equal to
console.log("a <= b ->", a <= b);  // Less than or equal to

// // String Operators
// let str1 = "Hello";
// let str2 = "World";
// console.log("\nString Operators:");
// console.log("str1 + ' ' + str2 ->", str1 + ' ' + str2);  // Concatenation

// // Logical Operators
// let isTrue = true;
// let isFalse = false;
// console.log("\nLogical Operators:");
// console.log("isTrue && isFalse ->", isTrue && isFalse);  // Logical AND
// console.log("isTrue || isFalse ->", isTrue || isFalse);  // Logical OR
// console.log("!isTrue ->", !isTrue);  // Logical NOT

// // Bitwise Operators
// let bitA = 5;  // 0101 in binary
// let bitB = 3;  // 0011 in binary
// console.log("\nBitwise Operators:");
// console.log("bitA & bitB ->", bitA & bitB);  // Bitwise AND
// console.log("bitA | bitB ->", bitA | bitB);  // Bitwise OR
// console.log("bitA ^ bitB ->", bitA ^ bitB);  // Bitwise XOR
// console.log("~bitA ->", ~bitA);  // Bitwise NOT
// console.log("bitA << 1 ->", bitA << 1);  // Left shift
// console.log("bitA >> 1 ->", bitA >> 1);  // Right shift
// console.log("bitA >>> 1 ->", bitA >>> 1);  // Zero-fill right shift

// // Ternary Operator
// let num = 7;
// let result = (num % 2 === 0) ? "Even" : "Odd";
// console.log("\nTernary Operator:");
// console.log("num is", result);  // Conditional (ternary) operator

// // Type Operators
// console.log("\nType Operators:");
// console.log("typeof num ->", typeof num);  // Typeof
// let obj = { name: "Ajay" };
// console.log("obj instanceof Object ->", obj instanceof Object);  // Instanceof

// // Edge Cases
// console.log("\nEdge Cases:");

// // Arithmetic with NaN and Infinity
console.log("NaN + 1 ->", NaN + 1);  // NaN
console.log("Infinity - Infinity ->", Infinity - Infinity);  // NaN
console.log("0 / 0 ->", 0 / 0);  // NaN

// Loose equality edge cases
console.log("null == undefined ->", null == undefined);  // true
console.log("null === undefined ->", null === undefined);  // false

// Bitwise with negative numbers
console.log("-5 >> 1 ->", -5 >> 1);  // -3 (arithmetic right shift)
console.log("-5 >>> 1 ->", -5 >>> 1);  // Large positive number (logical right shift)
