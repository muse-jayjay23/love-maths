// Allow DOM content to load first so that the function will only apply when all content is loaded in
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});


/**
 * Generates a random number for use in the game.
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: ${gameType}`);
        throw (`Unknown game type: ${gameType}. Aborting!`);
    }
};

/**
 * Checks the answer given by the user and returns a true or false value
 */
function checkAnswer () {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert("Hey, you got it right!, well done!")
    } else {
        alert(`Aww, You answered ${userAnswer}, The correct answer was ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
};

/**
 * gets operands and operator from DOM and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return[operand1 + operand2, "addition"]
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
};

function incrementScore() {

};

function incrementWrongAnswer() {

};

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
};

function displaySubtractQuestion() {

};

function displayMultiplyQuestion() {

};