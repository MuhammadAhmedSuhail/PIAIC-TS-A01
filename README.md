# PIAIC-TS-A01
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





