![image](https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/740a7831-592a-4d0c-ba1b-53724d80f6e9)# PIAIC-TS-A01
Assignment1 Codes for Typescript PIAIC WMD Program Quarter 1

### 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download) and [VS Code](https://code.visualstudio.com/) on your computer.

> After installing the software run the code below in a terminal to check if the installation was successful.

```
node -v
tsc -v
code -v
```

The **output** of the code above should be something like this
</br>

<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/2ae5b339-9d0a-4936-b7b3-f950ec773946" alt="Image" />
</p>

---

### 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

```typescript
let name = "Muhammad"
console.log(`Hello ${name}, would you like to learn some Python today?`)

export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/e0f8ddbc-d820-48bb-93e1-29ca53c1b8e4" alt="Image" />
</p>

---

### 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

```typescript
let name = "Muhammad ahmed"
console.log(`Lowercase: ${name.toLowerCase()}`)
console.log(`Uppercase: ${name.toUpperCase()}`)
console.log(`Titlecase: ${name.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")}`)

export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/ef26f53c-52bb-4a08-b604-0474757e07a7" alt="Image" />
</p>

---

### 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”

```typescript
let name = "David Goggins"
let quote = "Don't stop when you're tired. Stop when you're done."

console.log(`${name} said, "${quote}"`)
export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/d8f9f5e4-0105-490d-a70a-7967b853994d" alt="Image" />
</p>

---

### 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

```typescript
let famous_person = "David Goggins"
let quote = "Don't stop when you're tired. Stop when you're done."
let message = `${famous_person} said, "${quote}"`

console.log(message)
export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/f8439978-0388-43a2-bcc8-5e1cd93be524" alt="Image" />
</p>

---

### 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

```typescript
const nameWithWS = "\t   \n Muhammad Ahmed   \t   \n";
console.log(`Name with whitespace: "${nameWithWS}"`);

const strippedName = nameWithWS.trim();
console.log(`Stripped name: "${strippedName}"`);

export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/6ae409fc-0e04-41dc-8398-86120fef9f4f" alt="Image" />
</p>

---

### 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

```typescript
// Addition: 5 + 3 = 8
const additionResult = 5 + 3;
console.log(`Addition: 5 + 3 = ${additionResult}`);

// Subtraction: 10 - 2 = 8
const subtractionResult = 10 - 2;
console.log(`Subtraction: 10 - 2 = ${subtractionResult}`);

// Multiplication: 4 * 2 = 8
const multiplicationResult = 4 * 2;
console.log(`Multiplication: 4 * 2 = ${multiplicationResult}`);

// Division: 16 / 2 = 8
const divisionResult = 16 / 2;
console.log(`Division: 16 / 2 = ${divisionResult}`);
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/78dfa973-7fae-407b-9e52-39334fe5d77c" alt="Image" />
</p>

---

### 8. You should create four lines that look like this: console.log(5 + 3)

```typescript
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);

export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/b09bbc0a-76e4-4720-90c6-81d8b632027d" alt="Image" />
</p>

---

### 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

```typescript
const favoriteNumber = 8;
const message = `My favorite number is ${favoriteNumber}.`;

console.log(message);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/44b43c7a-e991-4673-869c-f04806314702" alt="Image" />
</p>

---

### 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

```typescript
// Program 1
// Store the favorite number in a variable
const favoriteNumber = 8;

// Create a message using string interpolation to include the favorite number
const message = `My favorite number is ${favoriteNumber}.`;

// Print the message to the console
console.log(message);

// Program 2
// Printing the result of 5+3 4 times
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);


// Export an empty object (commonly used in TypeScript modules)
export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/d30c39e0-00f7-4556-83ec-f267e630440d" alt="Image" />
</p>

---

### 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

```typescript
const names: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];

// Print each person's name
for (const name of names) {
  console.log(name);
}

export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/201cdd19-5396-4a30-a057-7ec8ad2fb2d8" alt="Image" />
</p>

---

### 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

```typescript
const names: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];
const message = "Hello, ";

// Print a personalized message to each person
for (const name of names) {
  console.log(message + name + "!");
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/8107e6ba-a220-4d70-9be9-929491ea6c42" alt="Image" />
</p>

---

### 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

```typescript
const transportationModes: string[] = ["car", "motorcycle", "bicycle", "train", "boat"];

// Print statements about each transportation mode
for (const mode of transportationModes) {
  console.log(`I would like to own a ${mode}.`);
}

export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/46222ac7-4dba-4070-a735-886c74cd732f" alt="Image" />
</p>

---

### 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

```typescript
const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];

// Print invitation messages to each person
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of engaging conversations.`);
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/5834874d-608a-44db-8b2a-690efd3ba7ff" alt="Image" />
</p>

---

### 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

```typescript
const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];
const guestUnableToMakeIt = guestList[1]; // The second guest can't make it

console.log(`${guestUnableToMakeIt} is unable to make it to the dinner.`);

guestList[1] = "Sufian"; // Replace the second guest with a new person

// Print the second set of invitation messages
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of engaging conversations.`);
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/66cf5414-1d9b-4158-ab77-7d50e4e015e7" alt="Image" />
</p>

---

### 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

```typescript
const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];

console.log("Good news! We found a bigger dinner table.\n");

guestList.unshift("Sufian"); // Add a new guest to the beginning of the array
guestList.splice(2, 0, "Ibrahim"); // Add a new guest to the middle of the array
guestList.push("Talal"); // Add a new guest to the end of the array

// Print a new set of invitation messages
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of engaging conversations.`);
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/7776d3f0-c569-4ef5-89fc-a765c1af04f3" alt="Image" />
</p>

---

### 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

```typescript
const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

for (const guest of guestList) {
  console.log(`Dear ${guest}, you're still invited to dinner. Please join us for an evening of engaging conversations.`);
}

guestList.length = 0; // Remove the last two names from the list

console.log(`Current guest list: ${guestList}`);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/5f119b13-ba11-4162-9e50-e8b80610b712" alt="Image" />
</p>

---

### 18. Seeing the World: Think of at least five places in the world you’d like to visit.

```typescript
const placesToVisit: string[] = ["Tokyo", "Kashmir", "Riyadh", "Jeddah", "Dubai"];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show its order has changed
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("\nOriginal order (restored):");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

// Print the array to show its order has been changed
console.log("\nAlphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();

// Print the array to show its order has changed
console.log("\nReverse alphabetical order:");
console.log(placesToVisit);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/b4bc7fad-c21d-4dce-9d10-2b9277210835" alt="Image" />
</p>

---

### 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

```typescript
const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];
const message = "Hello, ";

// Print invitation messages to each person
for (const guest of guestList) {
  console.log(message + guest);
}

// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/3ef67606-3692-412c-bba6-5c8dbf1f615a" alt="Image" />
</p>

---

### 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

```typescript
const favoriteFruits: string[] = ["apple", "banana", "mango", "strawberry", "watermelon"];

console.log(favoriteFruits);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/3d887aa0-ce4f-4372-81c4-80615163fde9" alt="Image" />
</p>

---

### 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

```typescript
// Car objects
const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
  };
  
const car2 = {
brand: "Honda",
model: "Civic",
year: 2021,
color: "Black",
};

const car3 = {
brand: "Ford",
model: "Mustang",
year: 2023,
color: "Red",
};
  
// Print car objects
console.log(car1);
console.log(car2);
console.log(car3);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/488f3048-f193-4984-ba29-f5f4ffb5dfa7" alt="Image" />
</p>

---

### 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

// Access an index that is out of bounds
console.log(numbers[10]); // Intentional error

// Correct the index error
console.log(numbers[2]); // Accessing a valid index

// Output the entire array
console.log(numbers);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/f322923d-51a1-4d07-8508-86fed61bdf32" alt="Image" />
</p>

---

### 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.

```typescript
let car = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

// Test 2
console.log("Is car == 'ford'? I predict false.");
console.log(car == 'ford');

// Test 3
console.log("Is car != 'honda'? I predict true.");
console.log(car != 'honda');

// Test 4
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

// Test 5
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

// Test 6
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');

// Test 7
console.log("Is car !== 'toyota'? I predict true.");
console.log(car !== 'toyota');

// Test 8
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

// Test 9
console.log("Is car starts with 's'? I predict true.");
console.log(car.startsWith('s'));

// Test 10
console.log("Is car ends with 'tu'? I predict false.");
console.log(car.endsWith('tu'));

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/3c9f975b-231f-4888-973d-fc0f88a6a27c" alt="Image" />
</p>

---

### 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.

```typescript
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
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/34923183-1a94-4e54-89a2-5d7d731744c9" alt="Image" />
</p>

---

### 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

```typescript
// Version 1
let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}

// Version 2

alien_color = 'yellow';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/2e0e3376-01f6-40e6-8811-2de7de314147" alt="Image" />
</p>

---

### 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

```typescript
// Version 1
let alien_color = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// Version 2
alien_color = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/7ff33110-a8d7-45e4-a115-3e1c5d9b72b1" alt="Image" />
</p>

---

### 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

```typescript
// Version 1
let alien_color = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points.");
}

// Version 2
alien_color = 'yellow';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points.");
}

// Version 3
alien_color = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points.");
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/d991e7d6-5646-45fa-92e1-a1e6bb1685fc" alt="Image" />
</p>

---

### 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age

```typescript
const age = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/0d08a3b7-2a97-4812-a5e9-ecfa37f5c2ca" alt="Image" />
</p>

---

### 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

```typescript
const favorite_fruits: string[] = ["apple", "banana", "mango"];

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/4383b8d1-b83e-4430-88d0-2517c53cee2c" alt="Image" />
</p>

---

### 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user.

```typescript
const usernames: string[] = ["admin", "Alice", "Bob", "Charlie", "David"];

for (const username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/4e1aa9cf-e3a1-469b-b34a-1ce49a412901" alt="Image" />
</p>

---

### 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. If the list is empty, print the message We need to find some users!. Remove all of the usernames from your array, and make sure the correct message is printed.

```typescript
const usernames: string[] = ["admin", "Ahmed", "Ahsan", "Sufian", "Talal"];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames from the array
usernames.length = 0;

if (usernames.length === 0) {
  console.log("We need to find some users!");
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/395d95fb-b83b-4f45-9012-71412d25c28c" alt="Image" />
</p>

---

### 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

```typescript
const current_users: string[] = ["john", "alice", "bob", "charlie", "david"];
const new_users: string[] = ["john", "jane", "adam", "mike", "sarah"];

for (const new_username of new_users) {
  const usernameExists = current_users.some((current_username) =>
    current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (usernameExists) {
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/fd790017-858b-4bb9-a63b-7df1db6c16d6" alt="Image" />
</p>

---

### 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

```typescript
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${number}${ordinalEnding}`);
}

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/8ddf3aab-6191-4092-99ef-82a33a166baa" alt="Image" />
</p>

---

### 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

```typescript
const favorite_pizzas: string[] = ["pepperoni", "margherita", "bbq chicken"];

for (const pizza of favorite_pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/b0634cc7-1a1d-4525-af87-e82749394472" alt="Image" />
</p>

---

### 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. Modify your program to print a statement about each animal, such as A dog would make a great pet. Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

```typescript
const animals: string[] = ["dog", "cat", "rabbit"];

for (const animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/e39275ab-7e95-483b-907f-8b8ad84a64a2" alt="Image" />
</p>

---

### 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

```typescript
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the message "${message}" printed on it.`);
  }
  
make_shirt("XL", "Hello, world!");

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/80eeab17-1813-4413-ae95-6443078b6ce0" alt="Image" />
</p>

---

### 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

```typescript
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message "${message}" printed on it.`);
  }
  
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, world!"); // Custom-sized shirt with a different message
  
export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/d4398b67-3029-4ddd-ae28-b490641ee4db" alt="Image" />
</p>

---

### 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

```typescript
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
  }
  
describe_city("Karachi", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("New York"); // Uses default country value

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/7b5d7d6c-5540-4cf3-8274-ffcb481519a8" alt="Image" />
</p>

---

### 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.

```typescript
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
  
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/f78fd464-ec10-4bff-9c4a-577b956a0290" alt="Image" />
</p>

---

### 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

```typescript
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
      artist: artist,
      title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
}
  
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 10));
console.log(make_album("Artist 3", "Album 3", 15));

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/df8e4fdb-e0c9-400d-8f93-28ab2ba6f588" alt="Image" />
</p>

---

### 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

```typescript
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
}
  
const magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

show_magicians(magician_names);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/faa4ca1e-56a8-41a9-82b4-a6e3c8ced0a1" alt="Image" />
</p>

---

### 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

```typescript
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const magician of magicians) {
      const great_magician = magician + " the Great";
      great_magicians.push(great_magician);
    }
  
    return great_magicians;
}
  
function show_magicians(magicians: string[]): void {
for (const magician of magicians) {
    console.log(magician);
}
}
  
const magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
const great_magician_names: string[] = make_great(magician_names);
show_magicians(great_magician_names);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/4c8e9ccc-907f-4851-85bd-bacd0ddfa024" alt="Image" />
</p>

---

### 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

```typescript
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const magician of magicians) {
      const great_magician = magician + " the Great";
      great_magicians.push(great_magician);
    }
  
    return great_magicians;
}
  
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
  
const magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

const modified_magician_names: string[] = make_great([...magician_names]);
show_magicians(magician_names);
show_magicians(modified_magician_names);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/dfc62959-5db2-4ec5-8e35-5551e45620d3" alt="Image" />
</p>

---

### 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

```typescript
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (const item of items) {
      console.log(item);
    }
    console.log("Bread");
    console.log("Sandwich Order Complete\n");
}
  
make_sandwich("Cheese", "Ham");
make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
make_sandwich("Peanut Butter", "Jelly");

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/137e4322-c7cf-4ce4-8de9-cd237a9e9142" alt="Image" />
</p>

---

### 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

```typescript
function create_car(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any } } {
    const car: { manufacturer: string, model: string, extras: { [key: string]: any } } = {
      manufacturer: manufacturer,
      model: model,
      extras: {}
    };
  
    for (const extra of extras) {
      const key = Object.keys(extra)[0];
      const value = extra[key];
      car.extras[key] = value;
    }
  
    return car;
}
  
const myCar = create_car("Toyota", "Camry", { color: "Blue" }, { feature: "Sunroof" });
console.log(myCar);

  
export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/d0054183-d1b3-43b4-b5c3-efb5b3dae910" alt="Image" />
</p>



