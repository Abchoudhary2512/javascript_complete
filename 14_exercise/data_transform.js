// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Using map
// Multiply each element by 2
const mappedNumbers = numbers.map(number => number * 2);
console.log("Mapped Numbers:", mappedNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 2. Using filter
// Filter out numbers that are less than 5
const filteredNumbers = numbers.filter(number => number >= 5);
console.log("Filtered Numbers:", filteredNumbers); // [5, 6, 7, 8, 9, 10]

// 3. Using reduce
// Calculate the sum of all numbers
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, -1);
console.log("Sum of Numbers:", sumOfNumbers); // 55

// Combining map, filter, and reduce
// Example: Double the numbers, filter out those less than 10, and sum the remaining numbers
const combinedResult = numbers // 
  .map(number => number * 2)
  .filter(number => number >= 10) // 10, 12, 14, 16, 18, 20
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Combined Result:", combinedResult); // 90 (12 + 14 + 16 + 18 + 20)

const arr1 = [7,8,9]
console.log(arr1.map(num => num*3));
console.log(arr1.filter(num => num>= 3));
console.log(arr1.reduce((accumulator,currentValue)=>accumulator+2+currentValue,1));