'use strict'; //Debug better

console.log(document.querySelector('.message').textContent);

//Doom is automatic created by the browser

//Doom --> HTML <-->  JAVASCRIPT, allow us to manipulate HTML

//DOOM Store ELEMENT IN A TREE STRUCTURE

//Document --> Entry point at the doom, MOST PARENT NODE

//Doom is not a part of javascript. Dom is part of WEB APIs

//We can acess those API's through Javascript. Written in JS and automatically available in JS. Brownsers

//API"s examples --> Timers, Fecth



//Setting content
//document.querySelector(".message").textContent = "Correct Number!"
//document.querySelector(".number").textContent = -1
//document.querySelector(".score").textContent = 5

//Input field, to get the actual value we use the value attribute
//document.querySelector(".guess").value = 9

const generateNumber = function () {
    return Math.trunc(Math.random() * 20)
}

//Get random number
let secretNumber = generateNumber()
let score = 20
let highScore = 0
//document.querySelector(".score").textContent = score //Setted in the HTML

console.log(secretNumber)

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message
}

const displayScore = function (score) {
    document.querySelector(".score").textContent = score
}

//Reacts to something that happend in the DOOM
//Events
document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        if (score > 0) {
            //No input
            if (!guess) {//Falsy
                displayMessage(`No number!`)
            }

            //Right number
            else if (guess === secretNumber) {
                displayMessage(`Right Number Congratulations!!!`)
                document.querySelector(".number").textContent = `${secretNumber}`

                //Manipulating style always String, Cammel Case property
                //STYLE PROPERTIE FIRST
                //Inline Style, changes aren't applied to the css file
                document.querySelector("body").style.backgroundColor = "purple"
                document.querySelector(".number").style.width = "30rem"

                if (score > highScore) {
                    highScore = score
                    document.querySelector(".highscore").textContent = highScore
                }
            }

            //Guess is different
            else {
                displayMessage((guess > secretNumber) ? "Too High" : "To low")
                score -= 1

                //Check if is game over
                if (score === 0) {
                    displayMessage(`Game Over!!!`)
                }

                //Updates the score
                displayScore(score)
            }
        }

    })//Function is an event handler



document.querySelector(".again").addEventListener("click", function () {
    //Restart game
    score = 20
    secretNumber = generateNumber()
    displayMessage(`Start guessing...`)
    displayScore(score)
    document.querySelector(".number").textContent = `?`
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
    console.log(secretNumber)

    //OR
    //    window.location.reload();//Does the same as reload //Will reload highScore to 0
})