//Sum (+)
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

//Subtraction (-)
function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

//Multiply (*)
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

//Divide (/)
function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}

const num1 = 10;
const operator = {
    sum: "+",
    subtract: "-",
    multiply: "*",
    divide: "/"
};
const num2 = 5;

function operate(num1, operator, num2) {
    switch (operator) {
        case "+": {
            return sum(num1, num2);
            break;
        }
        case "-": {
            return subtract(num1, num2);
            break;
        }
        case "*": {
            return multiply(num1, num2);
            break;
        }
        case "/": {
            return divide(num1,num2);
            break;
        }
    }
}

console.log(operate(num1, "+", num2))
