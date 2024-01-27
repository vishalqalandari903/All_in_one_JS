// function getUserName(username){
//     if(!username){
//         return
//     }
//     return username
// }


// function calculateCartPrice(...nums){
//     return nums
// }

// console.log(calculateCartPrice(200, 400, 500));





// const user = {
//     username: "hitesh", 
//     price: 999,
//     welcomeMessage: function (){
//         console.log(`${this.username}, welcome here`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);


// const addTwo = (num1, num2) => ( num1 + num2 );
const addTwo = (num1, num2) => ( {username: "hitesh"} );

console.log(addTwo(3, 5));