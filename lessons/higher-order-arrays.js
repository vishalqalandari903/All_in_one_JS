// Maps 
// let map = new Map()
// map.set("IN", "india")
// map.set("USD", "United States")
// map.set("GBP", "United Kingdom")
// map.set("GBP", "United Kingdom 2")

// ? map is iteratable using for of loop
// for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
// }

// ? object is not iteratable using for of loop
// let obj = {
//     "name": "vishal",
//     "age":15
// }
// for (const [key, value] of obj) {
//     console.log(`${key} :- ${value}`);
// }



// TODO: Loops on objects
const object = {
    "js": "javascript",
    "rb": "ruby",
    "cpp": "c++",
    "swift": "swift by apple",
}

for (const key in object) {
    console.log(`${key} :- ${object[key]}`);
}