// const d = new Date();
// console.log(d);
// const x = new Date("2023-13-24");
// console.log(x.getMonth());
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const y = new Date("2024-12-12")
// console.log(y.getHours());


// Create a new date object
const now = new Date();

// Get methods
console.log("Current Date and Time:", now);
console.log("getDate():", now.getDate()); // Day of the month (1-31)
console.log("getTime():", now.getTime()); // Milliseconds since January 1, 1970
console.log("getUTCDate():", now.getUTCDate()); // Day of the month in UTC (1-31)
console.log("getMilliseconds():", now.getMilliseconds()); // Milliseconds (0-999)
console.log("getMinutes():", now.getMinutes()); // Minutes (0-59)
console.log("getMonth():", now.getMonth()); // Month (0-11)
console.log("parse():", Date.parse(now.toString())); // Milliseconds since January 1, 1970 from string date
console.log("getDay():", now.getDay()); // Weekday (0-6)
console.log("getFullYear():", now.getFullYear()); // Full year (yyyy)
console.log("getHours():", now.getHours()); // Hours (0-23)
console.log("getSeconds():", now.getSeconds()); // Seconds (0-59)

// Set methods
now.setDate(15);
console.log("setDate(15):", now);

now.setFullYear(2025);
console.log("setFullYear(2025):", now);

now.setMonth(11); // December (0-11)
console.log("setMonth(11):", now);

now.setSeconds(30);
console.log("setSeconds(30):", now);

now.setTime(Date.now());
console.log("setTime(Date.now()):", now);

now.setMinutes(45);
console.log("setMinutes(45):", now);

now.setUTCDate(20);
console.log("setUTCDate(20):", now);

now.setHours(10);
console.log("setHours(10):", now);

now.setMilliseconds(500);
console.log("setMilliseconds(500):", now);
