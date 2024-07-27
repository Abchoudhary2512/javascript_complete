let arr = [1, 2, 3, 4, 5];

// pop()
arr.pop(); 
console.log(arr); // [1, 2, 3, 4]

// push()
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 6]

// concat()
let newArr = arr.concat([7, 8, 9]);
console.log(newArr); // [1, 2, 3, 4, 6, 7, 8, 9]

// reverse()
arr.reverse();
console.log(arr); // [6, 4, 3, 2, 1]

// shift()
arr.shift(); 
console.log(arr); // [4, 3, 2, 1]

// slice()
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // [3, 2]

// splice()
arr.splice(2, 0, 5);
console.log(arr); // [4, 3, 5, 2, 1]

// toString()
let str = arr.toString();
console.log(str); // "4,3,5,2,1"

// unshift()
arr.unshift(0);
console.log(arr); // [0, 4, 3, 5, 2, 1]

// valueOf()
let value = arr.valueOf();
console.log(value); // [0, 4, 3, 5, 2, 1]

// indexOf()
let index = arr.indexOf(5);
console.log(index); // 3

// lastIndexOf()
arr.push(5);
let lastIndex = arr.lastIndexOf(5);
console.log(lastIndex); // 6

// join()
let joinedStr = arr.join("-");
console.log(joinedStr); // "0-4-3-5-2-1-5"

// sort()
arr.sort((a, b) => a - b);
console.log(arr); // [0, 1, 2, 3, 4, 5, 5]
