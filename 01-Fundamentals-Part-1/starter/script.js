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


//Basic operators
const ageHenrique = 2030 - 1998;
console.log('Age in 2030', ageHenrique)
console.log("My age is " + ageHenrique)
//+ / ** +=  % x++ x--
console.log(10 % 6)

//Comparison operators
//> < >= <= == === !=
console.log('Henrique older than 24 ' + (ageHenrique > 24))
const isOlder = ageHenrique > 24

//String and template Literals
const secondName = "Camacho"
const job = "Software Engineer"
const birthYear = 1998

let henrique = "I'm " + firstName + " " + secondName + " and i'm a " + job + ", " + String(2022 - birthYear) + " years old"
console.log(henrique)
//Template literals ES6
henrique = `I'm ${firstName} ${secondName}\nAnd i'm a ${job}  ${String(2022 - birthYear)} years old`
console.log(henrique)
const newLine = `Testing my
Nigga` //don't need \n
console.log(newLine)

let century //Must be declared outside otherwise we can't acess the variable outside
if (birthYear <= 2000) {
    century = 20
}
else {
    century = 21
}
console.log(`Century ${century}`)

//Type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Jonas')) //Nan failed to convert
console.log(typeof NaN) //Invalid number

console.log(String(23), 23)

//Type coercion
//- --> String to Number, + --> Number to String
console.log("I'm " + 24 + ' years old') //don't need tpo convert explicitly
console.log("23" - "10" - 3)

//Truthy and falsy values
//5 falsy values: 0, '', undefined, null, Nan

//Jonas Never used conversion
console.log(`Boolean(0) ${Boolean(0)}`)
console.log(`Boolean('') ${Boolean('')}`)
console.log(`Boolean(undefined) ${Boolean(undefined)}`)
console.log(`Boolean(null) ${Boolean(null)}`)
console.log(`Boolean(Nan) ${Boolean(NaN)}`)

const money = '';
if (money) {
    console.log("I have money")
}
else {
    console.log("I don't have any money")
}

let height; //=0
if (height) {
    console.log("Height is defined")
}
else {
    console.log("Height is undefined")
}

//=== X ==
const ageTamara = "18"
if (ageTamara == 18) {// == Pretend it doesn't exist
    console.log("Can fuck aleady") //Type coercion, use ===
}//=== Not perform type coercion
else {
    console.log("Unfuckable")
}

//Input
const favNumber = Number(prompt("What's your favorite number?"))
console.log(`That's my favorite number ${favNumber} and is of type ${typeof (favNumber)}`)

//Diferent !==

//Logical operators, AND, OR, OPERATORS
if (!false || (true && false)) {
    console.log(true)
}


//Switch

const day = "monday" //Works for numbers int, and strings

switch (day) {
    case "monday": //day === monday
        console.log("It's monday")
        console.log("Going to do a lot of things")
        break
    case "tuesday":
        console.log("It's tuesday")
        break
    case "wednesday":
    case "thursday":
        console.log("It's Wednesday or Thursday")
        break
    default:
        console.log("None of the above")
        break
}

//Expression --> piece of code that produces some value
//Statment --> If's and shits like that, switch

//Ternary Operator

ageSamara = ageTamara ? "18" : 20

console.log(`ageSamara ${ageSamara}`)
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//Ecmascript
//ES6 --> ES2015 Annual Release cycle
//BackWards compatibily, almost nothing removed

//Transpile and polyfil, para converter para ES6(only necessary after app is developed)
