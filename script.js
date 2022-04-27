// JavaScript script
const expression = document.getElementById("expression");
const output = document.getElementById("output");

const numberButtons = document.querySelectorAll('[number]');
const operatorButtons = document.querySelectorAll('[operator]');
const clearButton = document.getElementById('clear');
const allClearButton = document.getElementById('allClear');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');

let clearScreen = false;
let operatorSet = false;

let operator = null;
let arg1 = '';
let arg2 = '';

expression.innerHTML = '';
output.innerHTML = '0';

equalsButton.addEventListener('click', () => {
    arg2 = output.textContent;
    printExpression(false);
    evaluate();
});

clearButton.addEventListener('click', clear);
allClearButton.addEventListener('click', allClear);
decimalButton.addEventListener('click', addDecimal);

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.id, button.textContent))
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent))
});

function evaluate() {
    if (arg1 == '' || arg2 == '') {
        return;
    }
    
    switch(true) {
        case operator == 'add':
            output.textContent = add(arg1, arg2);
            break;
        case operator == 'subtract':
            output.textContent = subtract(arg1, arg2);
            break;
    }

    arg1 = output.textContent;
    arg2 = '';
    clearScreen = true;
}

function clear() {
    output.textContent = '0';
}

function allClear() {
    operator = null;
    expression.textContent = '';
    output.textContent = '0';
    arg1 = '';
    arg2 = '';

    clearScreen = false;
    operatorSet = false;
}

function addDecimal() {
    if (clearScreen) {
        output.textContent = '0.';
        clearScreen = false;
    } else if (output.textContent.includes('.')) {
        return;
    } else {
        output.textContent += '.';
    }
}

function setOperator(operationText, newOperator) {
    if (clearScreen) {
        operator = operationText;
        if (operatorSet) {
            printOperator(false, newOperator);
        } else {
            printOperator(true, newOperator);
        }
        operatorSet = true;
        return;
    }

    if (operatorSet) {
        operator = operationText;
        printOperator(false, newOperator);
    }
    
    if (operator == null) {
        operator = operationText;
        printExpression(true, newOperator);
        arg1 = output.textContent;
        output.textContent = '0';
        operatorSet = true;
    } else {
        arg2 = output.textContent;
        printExpression(true, newOperator);
        evaluate();
        operator = operationText;
        operatorSet = true;
    }
}

function appendNumber(number) {
    if(clearScreen) {
        output.textContent = number;
        clearScreen = false;
    } else if (output.textContent === '0') {
        output.textContent = number;
    } else if (output.textContent.length >= 13) {
        return;
    } else {
        output.textContent += number;
    }

    operatorSet = false;
}

function printExpression(openExpression, newOperator) {
    if (openExpression) {
        expression.textContent += ' ' + output.textContent + ' ' + newOperator;
        checkExpressionLength();
        return;
    } else {
        expression.textContent += ' ' + output.textContent;
        checkExpressionLength();
        return;
    }
}

function printOperator(addOperator, newOperator) {
    if (addOperator) {
        expression.textContent += ' ' + newOperator;
        checkExpressionLength();
        return;
    } else {
        expression.textContent = expression.textContent.replace(/.$/,newOperator);
    }
}

function checkExpressionLength() {
    if (expression.textContent.length > 27) {
        while (expression.textContent.length > 25) {
        expression.textContent = expression.textContent.substring(1);
        }
        expression.textContent = '...' + expression.textContent;
    }
}