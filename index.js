// Import the built-in crypto module
const crypto = require('crypto');

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero!";
    }
    return num1 / num2;
}

// Function to return the sine of a number
function sin(num) {
    return Math.sin(num);
}

// Function to return the cosine of a number
function cos(num) {
    return Math.cos(num);
}

// Function to return the tangent of a number
function tan(num) {
    return Math.tan(num);
}

// Function to generate a random number of the desired length
function generateRandomNumber(length) {
    // Check if length is provided
    if (!length) {
        return "Provide length for random number generation.";
    }
    const bytes = Math.ceil(length / 2);
    return crypto.randomBytes(bytes).toString('hex').slice(0, length);
}

// Main function to perform calculations based on command line arguments
function calculator(operation, ...args) {
    let result;
    switch (operation) {
        case 'add':
            result = add(...args.map(Number));
            break;
        case 'sub':
            result = subtract(...args.map(Number));
            break;
        case 'mult':
            result = multiply(...args.map(Number));
            break;
        case 'divide':
            result = divide(...args.map(Number));
            break;
        case 'sin':
            result = sin(Number(args[0]));
            break;
        case 'cos':
            result = cos(Number(args[0]));
            break;
        case 'tan':
            result = tan(Number(args[0]));
            break;
        case 'random':
            result = generateRandomNumber(Number(args[0]));
            break;
        default:
            result = "Invalid operation!";
    }
    return result;
}

// Extract operation and arguments from command line arguments
const [,, operation, ...args] = process.argv;

// Perform calculation based on provided operation and arguments
const result = calculator(operation, ...args);

// Output the result
console.log(result);
