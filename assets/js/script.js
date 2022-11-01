// Allow DOM content to load first so that the function will only apply when all content is loaded in
document.addEventListener("DOMContentLoaded", function () {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    } 
});


/**
 * Generates a random number for use in the game.
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
};

function checkAnswer () {

};

function calculateCorrectAnswer() {

};

function incrementScore() {

};

function incrementWrongAnswer() {

};

function displayAdditionQuestion() {

};

function displaySubtractQuestion() {

};

function displayMultiplyQuestion() {

};