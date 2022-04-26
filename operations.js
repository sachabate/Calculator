// Math Operations
function add(arg1, arg2) {
    return (+arg1 + +arg2);
}

function subtract(arg1, arg2) {
    return (+arg1 - +arg2);
}

function multiply(arg1, arg2) {
    return (+arg1 * +arg2);
}

function divide(arg1, arg2) {
    if (arg2 == 0) {return 'ERROR'};
    return (+arg1 / +arg2);
}