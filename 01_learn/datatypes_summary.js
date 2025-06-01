// Primitive

// 7 types : String, Number, Boolean, Symbol, BigInt, undefined, null.

// JS is dynamically typed language
const score = 100;
const scoreValue = 99.8;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false

const bigNumber = 1234567891234569789123546789n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraja", "doga"];

let myObj = {
    name: "middi",
    age: "16",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

myFunction()