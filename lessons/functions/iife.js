// Immediately invoked function expression 

// global scope me polution ho jata hai us liye IIFE Ka Use karte hein 


// Semicolon ; is important otherwise error 

(function connectDB(){
    // named IIFE 
    console.log(`DB Connected`);
})();


((name) => {
    // unnamed IIFE 
    console.log(`DB Connected ${name}`);

})("vishal");