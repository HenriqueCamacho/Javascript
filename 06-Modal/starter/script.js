'use strict';

//Store selections in variables

const modal = document.querySelector(".modal")//Display = none

const overlay = document.querySelector(".overlay")

const btnCloseModal = document.querySelector(".close-modal")

//querySelector Only selects the first one
//const btnsOpenModal = document.querySelector(".show-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal")

const closeModal = function () {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

//If we want same behavior To different btns..., create functions
const openModal = function () {
    modal.classList.remove("hidden")//Don't need ., this is only for selector
    //modal.style.display = "display-block" //We could have used, but not the right way, if we had 10 styles, we would need to write all of them one by one
    overlay.classList.remove("hidden")
}

//Nodelist, like an array
//Adding and removing classes is the main way we change styles, because classes agreggates many styles
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal)
}

//Close the modal
btnCloseModal.addEventListener("click", closeModal)//Not calling the function
overlay.addEventListener("click", closeModal)

//Listen to keyboard events
//Global Events, they do not happen in one specific event
//Then add event listener to the entire document
document.addEventListener("keydown", function (e) {//Pass the event in parameter
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {//Event is an object
        closeModal()
    }
})// Keyup --> Lift finger off the key, Keypress --> Keep pressing finger on key, keydown --> Just press down the key