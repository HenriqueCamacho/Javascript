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

//Arrays
const arr = [1, 2, 3, 4, 5]
const print = (arra) => {
    arra.forEach((value, index) => {
        console.log(value)
        console.log(arra[index])
    })
}
const arr2 = new Array(5, 1, 2, 9, 5)
console.log(`Number of elements in arr ${arr.length}`)
//It's const but since array is not primitive value, can be mutated
//cant arr = [..], but can arr[1] = 2

const arr3 = arr.concat([6, 7]) //--> Not in place
print(arr3)

const crazyArray = [1, true, 'Michael', [10, 11, 12]]//All sorts of values like Python

//Basic arry methods 
//END of Array
arr3.push(8) //--> In place. return the current length
arr3.pop()//--> In place return the removed element

//Start of the array
arr3.unshift(0) //Add at the beggining and return the current length
arr3.shift()//Returns the element at the start

arr3.indexOf(3) // Return the index at wich the element is located
arr3.includes(5)//Return true if the element is in array


//Objects
const henryArray = { //Mutable, has properties
    firstName: "Henry Fields",
    Country: "Brazil",
    packageSize: 18,
    birthYear: 1998,
    HasDriverLicense: true,


    CalcAge: function (/*birthYear*/) {
        this.age = 2022 - this.birthYear
        return this.age //Arrow functions doesn't work here because of this keyword
    }
}

//Dot vs Bracket
console.log(`Dong size ${henryArray["packageSize"]}cm\n`)
console.log(`${henryArray["first" + "Name"]}`) //Can receive expression

//Basic object methods
//Adding
henryArray.city = "Cuiabá"//Same as henryArray["city"] = "Cuiabá"
console.log(`Age ${henryArray.CalcAge(/*henryArray.birthYear*/)}`)
console.log(henryArray.age)

//Loops
for (let i = 0; i <= 1; i++) {
    console.log("Looping " + i)
}

//Typeof arr is an object

let i = 0
while (i < 4) {
    if (i === 1) {
        i++
        continue //Ignora
    }
    console.log("Looping with While " + i)
    if (i === 2) {
        break//Don't want 3
    }
    i++
}//Also Do While

