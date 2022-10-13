'use strict';

function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age} born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';//Does not replace
            //firstName = 'Steven'; But can be reasigned
            const str = `Oh, you're a millenial, ${firstName}`;//Block scoped
            console.log(str)

            function add(a, b) {//Block scoped, only if stric mode
                return a + b;
            }

        }
        //console.log(str)
        console.log(millenial);
        //console.log(add(2, 3));
    }

    printAge();

    return age;
}

const firstName = 'Henrique';
calcAge(1996);
// console.log(age);
// printAge();
console.log(`First name --> ${firstName}`)

//Hoisting variables
console.log(me);
//console.log(year);
//console.log(job);
var me = 'Henrique';
const year = 1991;
let job = 'programmer';


//Hoisting functions 
console.log(add(1, 2));
//console.log(addArrow(1, 2)); //undefined
//console.log(addExpr(1, 2));
function add(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b; //--> Is undefined at this point because it was hoisted. Only works with functions declarations
//Summay, vars and functions declarations are hoisted


//example
console.log(`Number of produtcs --> ${numberOfProducts}`);
if (!numberOfProducts) {//falsy value
    deleteShoppingCart();
}
var numberOfProducts = 10; //--> is fucked
function deleteShoppingCart() {
    console.log(`Àll products deleted`);
}
var x = 1;//Property of the Window window.x
var y = 2;
const z = 3;



//THIS

console.log(this);//Window object
const calcAge2 = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}
//Regular function call, without owner
calcAge2(1998);//Undefined but without strict mode, it would be window object

//Arrow does not get it's own this, use lexical(use this of the parent scope)
//Therefore will point to the this of the global scope
const calcAge2Arrow = (birthYear) => {
    console.log(2022 - birthYear);
    console.log(this);
}
//Regular function call, without owner
calcAge2Arrow(1998);//Without strict mode, it would be window object

//Object, this is the guy that called it
const henrique = {
    year: 1998,
    calcAge: function () {
        console.log(this);
        console.log(2030 - this.year);
    }
}
henrique.calcAge();

const paula = {
    year: 2000
}

//Method borrowing
paula.calcAge = henrique.calcAge;//Copied
paula.calcAge();

const func = henrique.calcAge;
//func(); //Error, there is no this, it's undefined, there is no owner