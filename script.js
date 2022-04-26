// JavaScript script
const expression = document.getElementById("expression");
const output = document.getElementById("output");

const numberButtons = document.querySelectorAll('[number]');
const operatorButtons = document.querySelectorAll('[operator]');
const clearButton = document.getElementById('clear');
const allClearButton = document.getElementById('allClear');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');

let operator = null;
let arg1 = '';
let arg2 = '';

expression.innerHTML = '';
output.innerHTML = '0';

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
allClearButton.addEventListener('click', allClear);
decimalButton.addEventListener('click', addDecimal);

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.id, button.textContent))
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent))
});

function evaluate(operator, arg1, arg2) {

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
}

function addDecimal() {
    if (output.textContent.includes('.')) {
        return;
    } else {
        output.textContent += '.';
    }
}

function setOperator(operationText, newOperator) {
    if (operator == null) {
        operator = operationText;
        expression.textContent += ' ' + output.textContent + ' ' + newOperator;
        arg1 = output.textContent;
        output.textContent = '0';
    } else {
        arg2 = output.textContent;
        evaluate();
    }
}

function appendNumber(number) {
    if (output.textContent === '0') {
        output.innerHTML = number;
    } else if (output.textContent.length >= 13) {
        return;
    } else {
        output.textContent += number;
    }
}