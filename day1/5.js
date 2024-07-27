//function

// (function() {
//     console.log("IIFE executed");
// })(); // Output: IIFE executed

// function greet(name='no passed valuie') {
//     return `Hello, ${name}!`;
// }
// console.log(greet()); // Output: Hello, Guest!
// console.log(greet("Ajay")); // Output: Hello, Ajay!

// const fun = function(a,b){
//     console.log(a+b)
// }
// fun(1,4)

// const fun1 = (a,b) => console.log(a+b)

// fun1(1,41)

// factorial
// function fac(n){
//     if(n==0) return 1;
//     return n*fac(n-1);
// }

// console.log(fac(4));

//palindotrme check
// function pal(str) {
//     var i = 0;
//     var j = str.length - 1; // Adjust initial value of j
  
//     while (i < j) { // Adjust condition to i < j
//       if (str[i] == str[j]) {
//         i++;
//         j--;
//       } else {
//         return console.log('not a palindrome'); // Output not a palindrome
//       }
//     }
//     console.log('palindrome'); // Output palindrome
//   }
//   pal("112211"); // Test case
  

//max 
// const maxi = (arr) => {
//     arr.sort((a, b) => a - b); // Sort array numerically
//     return arr[arr.length - 1]; // Return the last element (maximum value)
// }

// console.log(maxi([1, 2, 3, 4])); // Output: 4
