// let arr = [1, 2, 3];

// function plusone(n) {
//   return n + 1;
// }

// const map = (arr, fn) => {
//   return arr.map((element) => {
//     console.log(fn(element));
//     return fn(element);
//   });
// };

// let newArr = map(arr, plusone);
// console.log(newArr);

// const map = (arr, fn) => arr.map((element,i) => fn(element, i));
// let newArr = [];

// function plusone(n) {
//   return n + 1;
// }
// function plusI(n, i) {
//   return n + i;
// }

// function map(arr, fn) {
//   let newArr = [];
//   arr.forEach((element, i) => {
//     newArr.push(fn(element, i));
//   });
//   return newArr;
// }

// let arr = [1, 2, 3];
// let newArray = map(arr, plusI);
// console.log(newArray);

// function firstIndex(n, i) {
//   return i === 0;
// }

// var filter = function (arr, fn) {
//   let filteredArr = [];
//   arr.forEach((element, i) => {
//     fn(element, i) && filteredArr.push(element);
//   });
//   return filteredArr;
// };
// let arr = [1, 2, 3];
// let newArr = filter(arr, firstIndex);
// console.log(newArr);

// let functions = [(x) => x + 1, (x) => x * x, (x) => x * 2];
// console.log(functions.length);
// // console.log(functions.length);
// var compose = function (functions) {
//   return function (x) {
//     for (i = functions.length - 1; i >= 0; i--) {
//       x = functions[i](x);
//       console.log(x);
//     }
//     return x;
//   };
// };

// let called = false;
// fn = (a, b, c) => a + b + c;
// const once = (fn) => {
//   called = true;
//   return function (...args) {
//     if (!called) {
//       return;
//     } else {
//       called = false;
//       return fn(...args);
//     }
//   };
// };

// TODO Solution one code:
// ? 1
// const createHelloWorld = () => {
//     return () => "Hello World";
// }
// ? 2
// const createHelloWorld = () => {
//   return function () {
//     return "Hello World";
//   };
// };

// TODO Solution two code:
// const createCounter = (n) => {
//   n--;
//   return function () {
//     return ++n;
//   };
// };
// const createCounter = (n) => (() => ++n)();
// const createCounter = (n) => () => n++;
// let fn = createCounter(2);
// console.log(fn());
// console.log(fn());
// console.log(fn());

// TODO Solution three code:
// const expect = (val1) => {
//   return {
//     toBe: function (val2) {
//       if (val1 === val2) {
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },
//     notToBe: function (val2) {
//       if (val1 !== val2) {
//         return true;
//       } else {
//         throw new Error("Equal");
//       }
//     },
//   };
// };

// TODO Solution four code:
// const createCounter = (init) => {
//   let number = init;
//   return {
//     increment() {
//       return ++number;
//     },
//     decrement() {
//       return --number;
//     },
//     reset() {
//       number = init;
//       return init;
//     },
//   };
// };

// TODO Solution five code:
// const map = (arr, fn) => {
//     let newArr = [];
//     arr.forEach((element, i) => {
//         newArr.push(fn(element, i));
//     })
//     return newArr;
// }

// TODO Solution six code:
// var filter = function (arr, fn) {
//   let filteredArr = [];
//   for (i = 0; i <= arr.length - 1; i++) {
//     fn(arr[i], i) && filteredArr.push(arr[i]);
//   }
//   return filteredArr;
// };

// TODO Solution seven code:
// var reduce = function(nums, fn, init) {
//     for(i=0; i<=nums.length - 1; i++){
//         init = fn(init, nums[i])
//     }
//     return init;
// };

// TODO Solution eight code:
// const compose = (functions) => {
//   return function (x) {
//     functions.reverse().forEach((innerFunction) => {
//       x = innerFunction(x);
//     });
//     return x;
//   };
// };

// TODO Solution nine code:
// const argumentsLength = (...args) => {
//   return args.length;
// };

// TODO Solution ten code:
// let called = false;
// const once = (fn) => {
//   called = true;
//   return function (...args) {
//     if (!called) {
//       return;
//     } else {
//       called = false;
//       return fn(...args);
//     }
//   };
// };

// function checkValError(fn, val1, val2, error) {
//   if (fn == "toBe" ? val1 === val2 : val1 !== val2) {
//     return true;
//   } else {
//     throw new Error(error);
//   }
// }
// const expect = (val1) => ({
//   toBe(val2) {
//     checkValError("toBe", val1, val2, "Not Equal");
//   },
//   notToBe(val2) {
//     checkValError("notToBe", val1, val2, "Equal");
//   },
// });

const memoize = (fn) => {
  let allArgs = [];
  return function (...args) {
    allArgs.forEach((element) => {
      let filteredArr = arr.filter((value, i) => {
        return value == args[i] || value == args.reverse()[i];
      });
      // element.forEach((eachNum) => {
      // });
    });
    allArgs.push([...args]);
  };
};

// let arr = [1, 2];
// let args = [2, 3];
// let filteredArr = arr.filter((value, i) => {
//   return value == args[i] || value == args.reverse()[i];
// });
// console.log(filteredArr);

// arr.forEach((element) => {
//   console.log("hello");
// });
// arr.push([1, 2, 3]);
// console.log(arr);
