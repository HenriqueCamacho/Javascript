'use strict';

console.log(document.querySelector('.message').textContent);

//Doom is automatic created by the browser

//Doom --> HTML <-->  JAVASCRIPT, allow us to manipulate HTML

//DOOM Store ELEMENT IN A TREE STRUCTURE

//Document --> Entry point at the doom, MOST PARENT NODE

//Doom is not a part of javascript. Dom is part of WEB APIs

//We can acess those API's through Javascript. Written in JS and automatically available in JS. Brownsers

//API"s examples --> Timers, Fecth



//Setting content
document.querySelector(".message").textContent = "Correct Number!"
//document.querySelector(".number").textContent = -1
//document.querySelector(".score").textContent = 5

//Input field, to get the actual value we use the value attribute
document.querySelector(".guess").value = 9

//Get random number
const secretNumber = Math.trunc(Math.random() * 20)
let score = 20
//document.querySelector(".score").textContent = score //Setted in the HTML

console.log(secretNumber)

//Reacts to something that happend in the DOOM
//Events
document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)
        //console.log(guess)
        //console.log(typeof guess)

        if (score > 0) {
            //No input
            if (!guess) {//Falsy
                document.querySelector(".message").textContent = `No number!`
            }

            //Right number
            else if (guess === secretNumber) {
                document.querySelector(".message").textContent = `Right Number Congratulations!!!`
                document.querySelector(".number").textContent = `${secretNumber}`
            }

            //Wrong Number -- Greater
            else if (guess > secretNumber) {
                document.querySelector(".message").textContent = `Too high`
                score -= 1
            }

            //Wrong Number -- Lower
            else if (guess < secretNumber) {
                document.querySelector(".message").textContent = `Too low`
                score -= 1
            }
        }

        if (score === 0) {
            document.querySelector(".message").textContent = `Game Over!!!`
        }

        document.querySelector(".score").textContent = score

    })//Function is an event handler