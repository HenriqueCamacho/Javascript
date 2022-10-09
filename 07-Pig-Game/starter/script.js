'use strict';

//It's doom element, not logic variable
const player0El = document.querySelector(".player--0")
const score0El = document.querySelector("#score--0")
const current0El = document.getElementById("current--0")

//Another way to select by id
const player1El = document.querySelector(".player--1")
const score1El = document.getElementById("score--1")
const current1El = document.getElementById("current--1")

//Dice
const diceEl = document.querySelector(".dice")
//Btn's
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")


//Declaring variables
let scores, currentScore, activePlayer, playing


const init = function () {
    diceEl.classList.add("hidden")

    //Set all scores to 0
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0

    //Logic variables
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player1El.classList.remove("player--active")//If it's not here, wont give any error

    player0El.classList.add("player--active")//If it's already there, JS will not add

}

init()

const switchPlayer = function () {
    //Resets the score
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = 0
    //Switch the player
    activePlayer = (activePlayer === 0) ? 1 : 0
    player0El.classList.toggle("player--active")//Toggle If it's in it, remove, else add
    player1El.classList.toggle("player--active")
}

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        //1. Generating a random number 
        const dice = Math.trunc(Math.random() * 6) + 1

        //2. Display dice
        diceEl.classList.remove("hidden")
        diceEl.src = `dice-${dice}.png`

        //3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            //Add dice to the current score
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        }
        else {
            switchPlayer()
        }
    }
})

btnHold.addEventListener("click", function () {
    if (playing) {
        //.Add current score to active player's score and display it
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        //2. Check if player's score is >-100
        //Finish the game
        if (scores[activePlayer] >= 50) {
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            playing = false
            diceEl.classList.add("hidden")
        } else {
            switchPlayer()
        }
    }
})

btnNew.addEventListener("click", function () {
    //window.location.reload();
    init()

})