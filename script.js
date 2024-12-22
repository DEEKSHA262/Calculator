let currentInput = ''; // Variable to store current input

// Function to append numbers and operators to the display
function appendNumber(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Handle square operation
        if (currentInput.includes('x²')) {
            let number = currentInput.replace('x²', '');
            currentInput = Math.pow(parseFloat(number), 2).toString();
        }
        // Evaluate the expression using JavaScript's eval function
        else {
            currentInput = eval(currentInput).toString();
        }
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

// Function for square operation
function square() {
    if (currentInput) {
        currentInput += 'x²';
        document.getElementById('display').value = currentInput;
    }
}
