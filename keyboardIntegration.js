// Keyboard Integration
window.addEventListener('keypress', keyboardInput);

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {appendNumber(e.key)};
    if (e.key === 'A' || e.key === 'a') {allClearButton.click()};
    if (e.key === 'Delete') {clearButton.click()};
    if (e.key === 'Enter') {equalsButton.click()};
    if (e.key === '.') {decimalButton.click()};
    if (e.key === '+') {addButton.click()};
    if (e.key === '-') {subtractButton.click()};
    if (e.key === '/') {divideButton.click()};
    if (e.key === '*') {multiplyButton.click()};
}
