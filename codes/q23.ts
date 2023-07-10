let string1 = 'Hello';
let string2 = 'World';
let number1 = 10;
let number2 = 20;
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Equality test: Is string1 == string2? I predict false.");
console.log(string1 == string2);

console.log("Inequality test: Is string1 != string2? I predict true.");
console.log(string1 != string2);

// Tests using the lowercase function
console.log("Lowercase test: Is string1 lowercase 'hello'? I predict true.");
console.log(string1.toLowerCase() === 'hello');

console.log("Lowercase test: Is string2 lowercase 'world'? I predict true.");
console.log(string2.toLowerCase() === 'world');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Equality test: Is number1 == number2? I predict false.");
console.log(number1 == number2);

console.log("Inequality test: Is number1 != number2? I predict true.");
console.log(number1 != number2);

console.log("Greater than test: Is number1 > number2? I predict false.");
console.log(number1 > number2);

console.log("Less than test: Is number1 < number2? I predict true.");
console.log(number1 < number2);

console.log("Greater than or equal to test: Is number1 >= number2? I predict false.");
console.log(number1 >= number2);

console.log("Less than or equal to test: Is number1 <= number2? I predict true.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("And operator test: Is number1 > 5 and number2 < 30? I predict true.");
console.log(number1 > 5 && number2 < 30);

console.log("Or operator test: Is number1 > 15 or number2 < 5? I predict true.");
console.log(number1 > 15 || number2 < 5);

// Test whether an item is in an array
console.log("In array test: Is number1 in the array? I predict false.");
console.log(array.includes(number1));

// Test whether an item is not in an array
console.log("Not in array test: Is number1 not in the array? I predict true.");
console.log(!array.includes(number1));

export = {}