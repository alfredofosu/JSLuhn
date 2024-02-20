// Validates if the provided string passes the Luhn check
function validate(number) {
    let parity = number.length % 2;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let digit = parseInt(number[i], 10);
        if (i % 2 === parity) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
}
// Calculates the Luhn check digit for a given number and returns the number with the check digit appended
function calculate(number) {
    let parity = (number.length + 1) % 2;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let digit = parseInt(number[i], 10);
        if (i % 2 === parity) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
    }
    let checkDigit = (10 - sum % 10) % 10;
    return `${number}${checkDigit}`;
}

// Generates a valid Luhn number of the provided length
function generate(length) {
    let number = "";
    for (let i = 0; i < length - 1; i++) {
        number += Math.floor(Math.random() * 10).toString();
    }
    return calculate(number);
}

// Generates a valid Luhn number of the provided length with a specific prefix
function generateWithPrefix(prefix, length) {
    let number = prefix;
    for (let i = prefix.length; i < length - 1; i++) {
        number += Math.floor(Math.random() * 10).toString();
    }
    return calculate(number);
}
