// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Hitesh",
//             lastname: "choudhary",
//             // fullName: `${this.firstname} ${this.lastname}`
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);
// console.log(regularUser.fullname.userfullname.fullName);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1, obj2, obj4)
// const obj3 = Object.assign(obj1, obj2, obj4)

// console.log(obj3);
// console.log(obj1);


// const obj3 = Object.assign(obj1, obj2, obj4)
// console.log(obj1 === obj3); // ? True 


// const obj3 = Object.assign({},obj1, obj2, obj4)
// console.log(obj1 === obj3); // ? False 

// const obj3 = {...obj1,...obj2, ...obj4} // ? Simple, easy & latest way *

// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@example.com"
//     },
//     {
//         id: 1,
//         email: "h@example.com"
//     },
//     {
//         id: 1,
//         email: "h@example.com"
//     },
// ]

// users[0].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("hello")? "hello property" : "hello not property");




const course = {
    name: "Javascript",
    price: '999',
    courseIntructor: "Hitesh Choudhary"
}

// course.courseIntructor 

const {courseIntructor: instructor} = course
console.log(instructor);
// console.log(courseIntructor);



// JSON 
// {
//     'name': "hitesh", 
//     'coursename': "Javascript",
//     'price': "free"
// }

// [
//     {},
//     {},
//     {},
// ]