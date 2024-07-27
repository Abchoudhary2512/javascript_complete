console.log(typeof  Date());  // string
console.log(typeof Date);  // function
console.log(typeof new Date()); //object

// console.log(typeof `ajay()`);

// let today = new Date();
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getFullYear());
// console.log(today.setDate(23));

let localDate = new Date();
console.log('Local Date:', localDate);
console.log('UTC Date:', localDate.toUTCString());
console.log('ISO Date:', localDate.toISOString());
