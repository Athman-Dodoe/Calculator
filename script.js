let firstNum;
let secondNum;
let operator;

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}



function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {

    if (secondNum == 0) {
        return "Cannot divide by zero"
    }
    return firstNum / secondNum;
}


// Function to perform the operation based on the operator

function operate(operator,firstNum, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);

        default:
            return "Invalid operator";
    }
}

firstNum = 6;
operator = '/';
secondNum = 3;

const result = operate(operator, firstNum, secondNum);
console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
