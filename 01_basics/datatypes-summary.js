//# Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 345555985225899885n


// Reference (Non primitive)

// Array, Objects, Funtions

const heroes = ["Batman", "Superman", "Peacemaker"];
let myObj = {
    name: "Naveed",
    age: 22,
}

const myFunction = function(){
    console.log("Hey World");
}

console.log(typeof myFunction);