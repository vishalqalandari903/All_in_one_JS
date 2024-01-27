// const promiseOne = new Promise(function (resolve, reject) {
//   //  Do an Async Task
//   // DB Calls, cryptography, network
//   setTimeout(() => {
//     console.log("Async task 1 is completed");
//     resolve();
//   }, 1000);
// });

// ? What to do after resolve
// promiseOne.then(function (result) {
//   console.log(`Async task 1 resolved`);
// });

// new Promise(function (resolve, reject) {
//   //  Do an Async Task
//   // DB Calls, cryptography, network
//   setTimeout(() => {
//     console.log("Async task 2 is completed");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async task 2 resolve");
// });


const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({username: "vishal", email: "vishal@gmail"})
  }, 1000);
})