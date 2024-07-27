const str1 = "ajay         "
const str2 = "choudhARY       "
console.log(str1.toUpperCase())
console.log(str1.trim())
console.log(str2.charAt(-1))
console.log(str1.concat(str2))
// const  str3 =  str1.concat(str2);
// console.log(str3.trim());
// console.log(str3)

let text = "Hello, World!";
let slicedText = text.slice(7, 12); // Extracts from index 7 to index 12 (excluding 12)
console.log(slicedText); // Output: "World"

let text1 = "Hello, World !, text ! temp";
let splittedText = text1.split("! "); // Splits the string at ", "
console.log(splittedText); // Output: ["Hello", "World!"]


let substringText = text.substring(7, 12);
console.log("substring:", substringText); // Output: "World"
