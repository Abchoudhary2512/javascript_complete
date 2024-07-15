// sync task

// console.log('Start');
// console.log('Task 1');
// console.log('Task 2');
// console.log('End');


// async task
// console.log('Start');

// setTimeout(() => {
//   console.log('Task 1');
// }, 1000);

// console.log('Task 2');
// console.log('End');


//callbacks
// function fetchData(callback) {
//     setTimeout(() => {
//       callback('Data received');
//     }, 1000);
//   }
  
//   console.log('Start');
//   fetchData((message) => {
//     console.log(message);
//   });
//   console.log('End');
  

// promises
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
  
  console.log('Start');
  promise.then((message) => {
    console.log(message);
  });
  console.log('End');
  