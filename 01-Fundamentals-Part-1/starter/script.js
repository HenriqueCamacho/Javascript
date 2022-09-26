let js = '1';
console.log(js)

/*Cammel case for variables names
All uppercase variables --> constant
Capital case for Classes*/

//Data Types
let age = 23; //Number --> All numbers are floating point
let firstName = 'Henrique' //String
let fullAge = true; //Boolean

let children; /*undefined --> Variable not yet defined, value and typeof object, it's a bug in Javascript
null --> empty value, null value and typeof
Symbol(ES 2015) --> Unique value cannot be changed
BigInt --> Larger integers than the Number type*/

//In Javascript Value has types, not variables

console.log("Type of FirstName variable", typeof (firstName))

//Declaring variables

//Let --> Can change the value of variable
let fuckYou = true

//Const --> Can't change the value, but can change things inside the value, like in a array or object
const myobj = { name: "Henrique", age: 20 } //Cannot declare empty
myobj.age = 24

//Var --> Never use, Hoisting
var Var
Var = "Never use"

//We don't need to write let const or var, but by not using it will be Global block, declare always