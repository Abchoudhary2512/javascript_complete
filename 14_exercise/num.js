let str = "The year is 2024. Apples, bananas, and carrots cost $3.50 each.";

// Matches any character 'a', 'b', or 'c'
let regex1 = /[abc]/g;
console.log(str.match(regex1)); // ['A', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'a', 'a']

// Matches any character 'a', 'b', or 'c' using alternatives
let regex2 = /(a|b|c)/g;
console.log(str.match(regex2)); // ['a', 'a', 'a', 'a', 'a', 'c', 'a', 'a']

// Matches any character that is not 'a', 'b', or 'c'
let regex3 = /[^abc]/g;
console.log(str.match(regex3)); // ['T', 'h', 'e', ' ', 'y', 'e', 'r', ' ', 'i', 's', ' ', '2', '0', '2', '4', '.', ' ', 'p', 'l', 'e', 's', ',', ' ', 'n', 'n', 's', ',', ' ', 'n', 'd', ' ', 'r', 'o', 't', 's', ' ', '$', '3', '.', '5', '0', ' ', 'e', 'h', '.']

// Matches any digit from 0 to 9
let regex4 = /[0-9]/g;
console.log(str.match(regex4)); // ['2', '0', '2', '4', '3', '5', '0']

// Matches any uppercase or lowercase letter (including some special characters between Z and a)
let regex5 = /[A-z]/g;
console.log(str.match(regex5)); // ['T', 'h', 'e', 'y', 'e', 'r', 'i', 's', 'A', 'p', 'p', 'l', 'e', 's', 'b', 'a', 'n', 'a', 'n', 'a', 's', 'c', 'a', 'r', 'r', 'o', 't', 's', 'c', 'o', 's', 't', 'e', 'a', 'c', 'h']
