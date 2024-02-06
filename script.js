// Function to append characters to the screen
function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById('screen').value = '';
}

// Function to calculate the power of 2
function power() {
    var screenValue = document.getElementById('screen').value;
    var result = Math.pow(2, eval(screenValue));
    document.getElementById('screen').value = result;
}

// Function to calculate the square root
function squareRoot() {
    var screenValue = document.getElementById('screen').value;
    var result = Math.sqrt(eval(screenValue));
    document.getElementById('screen').value = result;
}

// Function to calculate the factorial
function factorial() {
    var screenValue = document.getElementById('screen').value;
    var result = 1;
    for (var i = 2; i <= eval(screenValue); i++) {
        result *= i;
    }
    document.getElementById('screen').value = result;
}

// Function to calculate the logarithm
function logarithm() {
    var screenValue = document.getElementById('screen').value;
    var result = Math.log10(eval(screenValue));
    document.getElementById('screen').value = result;
}

// Function to calculate the natural logarithm
function naturalLog() {
    var screenValue = document.getElementById('screen').value;
    var result = Math.log(eval(screenValue));
    document.getElementById('screen').value = result;
}

// Function to toggle the sign of the number
function toggleSign() {
    var screenValue = document.getElementById('screen').value;
    if (screenValue !== '') {
        document.getElementById('screen').value = -eval(screenValue);
    }
}

// Function to perform basic operations (+, -, *, /)
function operation(operator) {
    var screenValue = document.getElementById('screen').value;
    if (screenValue !== '') {
        document.getElementById('screen').value += operator;
    }
}

// Function to calculate the result
function calculateResult() {
    var screenValue = document.getElementById('screen').value;
    var result = eval(screenValue);
    document.getElementById('screen').value = result;
}
