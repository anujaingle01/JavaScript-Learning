//  *** Primitive ***
//  7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "anu"

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof anotherId);
// console.log(id === anotherId);

// BigInt represented with n at end of the number
const bigNumber = 3456543576654356754n



// *** Reference (Non primitive) ***
// 3 Types :  Array, Objects, Functions

// Array of String
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros)       // function obj

// Object written in curly braces
let myObj = {
    name: "anu",
    age: 24,
}
console.log(typeof myObj)       // function obj

// function stored in variable
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction)  // obj function 



// Notes =
// https://262.ecma-international.org/5.1/#sec-11.4.3