//Strict mode --> Write secure JS code
'use strict' //Must be the First thing in the code

//Avoid to introduce bugs to code
//      |-->Forbid us to do certain things
//      |-->Create visible erros in the developer console

let hasDriverLicense = false
const passTest = true

/*if (passTest) {
    //hasDriverLicensee = true //Native JS doest not caught this
}*/

//const interface = 'Audio' //JS is reserving for a feature that might implement in the future
//const private = 123 //Might 

function logger(name) {
    for (let i = 0; i <= 4; i++) {
        console.log(`Logging ${i} for ${name}`)
    }

    return -1
}

const rNumber = logger("Henry")
console.log(`rNumber --> ${rNumber}`)

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} aples and ${oranges}.`
    return juice
}

const myJuice = fruitProcessor(5, 1)
console.log(`myJuice ${myJuice}`)

//Function declaration, we can call before it's 'created' HOISTING
function calcAge1(birthYear) {
    return 2022 - birthYear
}

const age1 = calcAge1(1998)
console.log(`Your age is ${age1}`)

//Function expression, funciton in JS are not a type, but a value
const calcAge2 = function (birthYear) {//Anonymous function, that's a expression
    return 2022 - birthYear
}

const age2 = calcAge2(1998)
console.log(`Your age is ${age2}`)

//Which one to use? Depends. Jonas preffer expression


//Arrow functions
const sum = (num1, num2) => num1 + num2 //Pnly work if it has one statment
console.log(`Sum of 1+1 = ${sum(1, 1)}`)

const complexOperation = (num1, num2) => {//We are just hiding the function and adding the arrow
    //Do stuff
    num1++
    num2++
    return num1 + num2
}
console.log(`Sum of 1++ + 1++ = ${complexOperation(1, 1)}`)

//More code and more parameters, loose the advantage of arrow functions
//Wich should we use? This keyword

//Functions calling other functions

