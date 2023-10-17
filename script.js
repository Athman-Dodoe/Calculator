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


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}


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
let decimalEntered = false;


function updateDisplay(newValue) {

    if (newValue === '.') {
        decimalEntered = true; 
    }

    displayValue += newValue;
    output.textContent = displayValue
   
    
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

decimal.addEventListener('click', function() {
    if (!decimalEntered) {
        if (displayValue === '' || !displayValue.includes('.')) {
            updateDisplay('.');
        }
        decimalEntered = true;
    }
});



plus.addEventListener('click', function() {
    if (displayValue !== '') {
        calculateValue();
        firstNum = parseFloat(output.textContent); 
        operator = '+';
        displayValue = ''; 
        decimalEntered = false;
    }

    
})


quotient.addEventListener('click', function(){
    if (displayValue !== '') {
        calculateValue();
        firstNum = parseFloat(output.textContent); 
        operator = '/';
        displayValue = ''; 
        decimalEntered = false;
    }
    
})


minus.addEventListener('click', function(){
    if (displayValue !== '') {
        calculateValue();
        firstNum = parseFloat(output.textContent); 
        operator = '-';
        displayValue = ''; 
        decimalEntered = false;
    }
   

})

product.addEventListener('click', function(){
    if (displayValue !== '') {
        calculateValue();
        firstNum = parseFloat(output.textContent); 
        operator = '*';
        displayValue = ''; 
        decimalEntered = false;
    }
   
})


clear.addEventListener('click', function() {
    displayValue = '';
    output.innerText = '0';
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    decimalEntered = false;
})

del.addEventListener('click', function() {

    let currentText = output.textContent;
    if (currentText.length > 0) {
        output.textContent = currentText.slice(0,-1);
        displayValue =  output.textContent;
    }
})

function calculateValue(){
   if(firstNum !== undefined && operator !== undefined && displayValue !== '') {
        secondNum = parseFloat(displayValue);
        const result = operate(operator, firstNum, secondNum);
        output.textContent = result;
        firstNum = result;
        displayValue = '';
   }
}

equal.addEventListener('click', function(){
    calculateValue();
    displayValue = firstNum.toString();
    output.textContent = displayValue;
    firstNum = undefined;
    operator = undefined;
    decimalEntered = false;
})




