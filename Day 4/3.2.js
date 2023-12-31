/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/
// From function declarations to explicit and implicit
return functions (one of each).
function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
const welcomeExplicit = function() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
const welcomeImplicit = () => 'Welcome to Appleseeds Bootcamp!';



function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}

const powerExplicit = function (){

}
// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

(function(a) {
    return Math.sqrt(a);
})(number);  


const randomNumbers = (a, b) => Math.random() * (a - b) +
b;