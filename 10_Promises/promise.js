// Q and BlueBird befoer the fetch and promise

const promiseOne = new Promise((resolve, rejection) => {
  //do an async tasks
  // db calls, network, crypto
  setTimeout(function () {
    console.log("async task is completed");
    resolve();
  }, 1000);
}); //creating the instance of the promise
// resovlve --> then
promiseOne.then(function () {
  console.log("promised consume");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

// promise three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ajay", email: "chai@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user.email);
});

// prommiise 4
const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "new", pass: "12121" });
    } else {
      reject("error: something went wrong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((namereturn) => {
    console.log(namereturn);
  })
  .catch(function (err) {
    console.log(err);
  }).finally(()=>{
    console.log("the promised is either resolved or rejected")
  })


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
          resolve({ username: "JS", pass: "555121" });
        } else {
          reject("error: JS went wrong");
        }
      }, 1000);
})

async function consumePromiseFive() {
   try {
    const response =  await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error );
   }
}
consumePromiseFive()

// async function getAllData(){
//    try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
// }
// getAllData()

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();

})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})