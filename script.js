const nine = document.querySelector('#nine');
const eight = document.querySelector('#eight');
const seven = document.querySelector('#seven');
const six = document.querySelector('#six');
const five = document.querySelector('#five');
const four = document.querySelector('#four');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');
const zero = document.querySelector('#zero');

const quotient = document.querySelector('#divide');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const product = document.querySelector('#multiply');
const equal = document.querySelector('#equal');


const output = document.querySelector('#output');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');


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



let displayValue = '';


function updateDisplay(newValue) {
    displayValue += newValue;
    output.textContent = displayValue;
    console.log(displayValue)
}

nine.addEventListener('click', function(){
    updateDisplay('9');
      
})

eight.addEventListener('click', function(){
    updateDisplay('8');

})

seven.addEventListener('click', function(){
    updateDisplay('7');
})

six.addEventListener('click', function(){
    updateDisplay('6');

})

five.addEventListener('click', function(){
    updateDisplay('5');

})

four.addEventListener('click', function(){
    updateDisplay('4');

})

three.addEventListener('click', function(){
    updateDisplay('3');

})

two.addEventListener('click', function(){
    updateDisplay('2');
})

one.addEventListener('click', function(){
    updateDisplay('1');
})

zero.addEventListener('click', function(){
    updateDisplay('0');
})


plus.addEventListener('click', function(){
    operator = '+'
    updateDisplay(operator);
})

quotient.addEventListener('click', function(){
    operator = '/'
    updateDisplay(operator);
})


minus.addEventListener('click', function(){
    operator = '-'
    updateDisplay(operator);

})

product.addEventListener('click', function(){
    operator = '*'
    updateDisplay(operator);
})


clear.addEventListener('click', function() {
    displayValue = '';
    output.innerText = '';

})

del.addEventListener('click', function() {

    let currentText = output.textContent;
    if (currentText.length > 0) {
        output.textContent = currentText.slice(0,-1);
        displayValue =  output.textContent;
    }
})

equal.addEventListener('click', function(){
   
  let expression = displayValue.split(operator);
  console.log(expression);

  firstNum = parseFloat(expression[0]);
  secondNum = parseFloat(expression[1]);

  let result = operate(operator, firstNum, secondNum);
  output.textContent = result;

  displayValue = '';

    
})




