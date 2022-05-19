// This is a string.
const string = "Hello world!";
// And this is a number.
const number = -57.32;

// We can pass these into functions like console.log.
console.log("string:", string);
console.log("number:", number);

// Let's see what happens when we add them together.
console.log("string + number:", string + number);

// Let's try a boolean as well.
const boolean = true;
console.log("boolean:", boolean);

// What happens if we add the boolean?
console.log("string + boolean:", string + boolean);

// Notice that anything added to a string just sticks it
// to the end of the string.

// Let's try converting to avoid that.
const numericString = "42";

// Let's add 2 to numericString.
console.log("numericString:", numericString + 2);

// To get our desired result, we need to first convert our string to a number:
const numericStringAsNumber = parseInt(numericString);

// Now let's try.
console.log("numericStringAsNumber:", numericStringAsNumber + 2);

// Nice. What about decimal numbers?
const decimalNumber = "42.5";

console.log("parseInt:", parseInt(decimalNumber) + 2);

// That chopped off our decimal. In order to parse a number with a decimal,
// we'll need to use parseFloat.
console.log("parseFloat:", parseFloat(decimalNumber) + 2);
