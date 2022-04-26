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
let arg1 = 0;
let arg2 = 0;

expression.innerHTML = '';
output.innerHTML = '';

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
allClearButton.addEventListener('click', allClear);
decimalButton.addEventListener('click', addDecimal);

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.textContent))
});



function evaluate(operator, arg1, arg2) {

}

function clear() {
    
}

function allClear() {
    
}

function addDecimal() {
    
}

function setOperator() {

}