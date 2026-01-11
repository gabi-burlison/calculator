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

const num1 = 5;
const operator = {
    sum: "+",
    subtract: "-",
    multiply: "*",
    divide: "/"
};
const num2 = 5;

function operate(num1, operator, num2) {
    let result = 0;
    if (operator === "+") {
        return sum(num1, num2);
    }
    return "Error";
}

console.log(operate(num1, operator.sum, num2));

