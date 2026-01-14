//Math functions 
function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) return "Error";
    return num1 / num2;
}

function operate(num1, operator, num2) {
    let a = Number(num1);
    let b = Number(num2);

    switch (operator) {
        case "+": return sum(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return null;
    }
}

let displayValue = "";      
let firstNumber = "";       
let currentOperator = null; 
let shouldResetScreen = false; // 

const displayDiv = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-math');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function (e) {
        if (shouldResetScreen) {
            displayValue = "";
            shouldResetScreen = false;
        }

        displayValue += e.target.textContent;
        displayDiv.textContent = displayValue;
    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function (e) {
        if (currentOperator !== null && shouldResetScreen === false) {
            let result = operate(firstNumber, currentOperator, displayValue);
            displayDiv.textContent = result;
            firstNumber = result; 
        } else {
            firstNumber = displayValue;
        }

        currentOperator = e.target.textContent;

        shouldResetScreen = true;
    });
}

equalsButton.addEventListener('click', function () {
    if (currentOperator === null || shouldResetScreen) return;

    let result = operate(firstNumber, currentOperator, displayValue);

    displayDiv.textContent = result;
    displayValue = result; 
    currentOperator = null; 
});

clearButton.addEventListener('click', function () {
    displayValue = "";
    firstNumber = "";
    currentOperator = null;
    displayDiv.textContent = "0";
});