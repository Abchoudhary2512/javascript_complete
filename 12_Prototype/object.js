// // function mul(num){
// //     return num*5;
// // }

// // mul.power = 3;
// // console.log(mul.power)
// // console.log(mul.prototype);
// const onMyBirthday = (isKayoSick) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (!isKayoSick) {
//           resolve(21);
//         } else {
//           reject(new Error("I am sad"));
//         }
//       }, 2000);
//     });
//   };



//   onMyBirthday(false)
//   .then((result) => {
//     console.log(`I have ${result} cakes`); // In the console: I have 2 cakes
//   })
//   .catch((error) => {
//     console.log(error); // Does not run
//   })
//   .finally(() => {
//     console.log("Party"); // Shows in the console no matter what: Party
//   });


//   onMyBirthday(true)
//   .then((result) => {
//     console.log(`I have ${result} cakes`); // does not run
//   })
//   .catch((error) => {
//     console.log(error); // in console: Error: I am sad
//   })
//   .finally(() => {
//     console.log("Party"); // Shows in the console no matter what: Party
//   });

